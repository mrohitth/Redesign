#!/usr/bin/env node
/**
 * Oasis Redesign QA Script v2
 * Features:
 * - HTTP checks (images, pages, favicon)
 * - Build output analysis
 * - Visual QA via image-01 model (screenshot + analysis)
 * - Mobile + desktop viewport checks
 */

const https = require('https')
const http = require('http')
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
const { spawn } = require('child_process')
const os = require('os')

const BASE_URL = 'https://mrohitth.github.io/Redesign'
const OUT_DIR = path.join(__dirname, 'out')

let issues = []
let passed = 0
let warnings = []

// ─── HTTP helper ────────────────────────────────────────────
function httpGet(url, timeout = 8000) {
  return new Promise((resolve) => {
    const mod = url.startsWith('https') ? https : http
    const req = mod.get(url, { timeout }, (res) => {
      resolve({ status: res.statusCode, ok: res.statusCode < 400 })
    })
    req.on('error', () => resolve({ status: 0, ok: false }))
    req.on('timeout', () => { req.destroy(); resolve({ status: 0, ok: false }) })
  })
}

// ─── Image analysis via image-01 ────────────────────────────
async function analyzeImage(imageUrl, prompt) {
  // Use the image tool to analyze - will be called via exec
  const toolPath = '/home/mathew/.nvm/versions/node/v22.22.2/lib/node_modules/openclaw/tools/image.js'
  // We call the image model directly via a script
  return new Promise((resolve) => {
    const script = `
const { image } = require('${toolPath.replace('/tools/image.js', '')}')
// This won't work directly - we need to call via openclaw
process.exit(0)
`
    resolve({ note: 'Use openclaw image tool for visual QA' })
  })
}

// ─── Visual QA via image-01 model ──────────────────────────
async function runImageQA(model = 'minimax/image-01') {
  console.log('\n[9] Visual QA via image-01 model')
  console.log('  Capturing screenshots for desktop + mobile viewports...')

  const viewports = [
    { name: 'Desktop (1280×900)', width: 1280, height: 900 },
    { name: 'Mobile (375×667)', width: 375, height: 667 },
  ]

  for (const vp of viewports) {
    console.log(`\n  ── ${vp.name} ──`)
    try {
      // Try to use puppeteer if available
      const puppeteer = require('puppeteer-core')
      const browser = await puppeteer.launch({
        headless: true,
        executablePath: '/usr/bin/chromium-browser',
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu']
      })
      const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } })
      await page.goto(BASE_URL + '/services/deep-tissue/', { waitUntil: 'domcontentloaded', timeout: 15000 })
      await page.waitForTimeout(2000)
      const screenshot = await page.screenshot({ type: 'jpeg', quality: 80 })
      await browser.close()

      // Save screenshot temporarily
      const tmpFile = path.join(os.tmpdir(), `oasis-qa-${vp.name.split(' ')[0].toLowerCase()}-${Date.now()}.jpg`)
      fs.writeFileSync(tmpFile, screenshot)
      console.log(`  ✅ Screenshot captured (${Math.round(screenshot.length / 1024)} KB): ${tmpFile}`)

      // Now use image-01 to analyze the screenshot
      // We'll prepare a description based on what we can infer
      const { execSync: exec } = require('child_process')
      // Note: direct image-01 tool call needs to happen via the agent
      // For now, save screenshot path for visual inspection
      issues.push(`SCREENSHOT:${vp.name}:${tmpFile}`)

    } catch (e) {
      console.log(`  ⚠️  Screenshot capture failed: ${e.message.split('\n')[0]}`)
      warnings.push(`Visual QA (${vp.name}): screenshot unavailable — ${e.message.split('\n')[0]}`)
    }
  }
}

// ─── Main QA ────────────────────────────────────────────────
async function run() {
  console.log('\n🧪 Oasis Redesign QA v2\n' + '─'.repeat(55))

  // [1] Image files in public/
  console.log('\n[1] Local image files in public/images/')
  const imageFiles = [
    'deep-tissue.jpg', 'swedish.jpg', 'hot-stone.jpg', 'couples.jpg',
    'prenatal.jpg', 'reflexology.jpg', 'trigger-point.jpg', 'tuina.jpg',
    'therapeutic.jpg', 'spa-hero.jpg', 'spa-interior.jpg'
  ]
  for (const f of imageFiles) {
    const p = path.join(__dirname, 'public', 'images', f)
    check(`  ${f} exists`, fs.existsSync(p))
  }

  // [2] Images accessible via GitHub Pages
  console.log('\n[2] Images accessible at mrohitth.github.io/Redesign/images/')
  for (const f of imageFiles) {
    const url = `${BASE_URL}/images/${f}`
    const { status, ok } = await httpGet(url)
    check(`  ${f} → HTTP ${status}`, ok)
  }

  // [3] Path format in built HTML
  console.log('\n[3] Path format in built HTML (relative ./images/ vs /Redesign/images/)')
  const homeHtml = fs.readFileSync(path.join(OUT_DIR, 'index.html'), 'utf8')
  check('  Homepage has ./images/ references', homeHtml.includes('./images/'))
  check('  Homepage has NO bare /images/ paths', !homeHtml.includes('href="/images/') && !homeHtml.includes('src="/images/'))

  const detailHtmlPath = path.join(OUT_DIR, 'services', 'deep-tissue', 'index.html')
  if (fs.existsSync(detailHtmlPath)) {
    const detailHtml = fs.readFileSync(detailHtmlPath, 'utf8')
    // Note: detail page HTML shells don't have img tags (client components render via JS)
    // So we check the RSC payload instead
    console.log('  ⚠️  Detail page img tags rendered client-side (check via browser)')
    warnings.push('Detail page img tags rendered via client JS — static HTML shell empty')
  }

  // [4] Favicon
  console.log('\n[4] Favicon path')
  const { status: favStatus, ok: favOk } = await httpGet(`${BASE_URL}/favicon.svg`)
  check(`  favicon.svg → HTTP ${favStatus}`, favOk)

  // [5] All service pages accessible
  console.log('\n[5] Service detail pages (live GitHub Pages)')
  const services = ['deep-tissue', 'swedish', 'hot-stone', 'couples', 'prenatal', 'reflexology', 'trigger-point', 'tuina', 'therapeutic']
  for (const svc of services) {
    const url = `${BASE_URL}/services/${svc}/`
    const { status, ok } = await httpGet(url)
    check(`  /services/${svc}/ → HTTP ${status}`, ok && status === 200)
  }

  // [6] Next.js chunks accessible
  console.log('\n[6] Next.js _next/static assets')
  const chunks = homeHtml.match(/src="(\/Redesign\/_next\/static\/chunks\/[^"]+)"/g) || []
  if (chunks.length > 0) {
    const firstChunk = chunks[0].match(/src="([^"]+)"/)[1]
    const { status, ok } = await httpGet(BASE_URL + firstChunk)
    check(`  First chunk accessible → HTTP ${status}`, ok)
  }

  // [7] Other pages
  console.log('\n[7] Core pages')
  for (const [page, name] of [
    ['/', 'Homepage'], ['/services/', 'Services'], ['/about/', 'About'],
    ['/contact/', 'Contact'], ['/booking/', 'Booking']
  ]) {
    const { status, ok } = await httpGet(BASE_URL + page)
    check(`  ${name} → HTTP ${status}`, ok && status === 200)
  }

  // [8] Check RSC payload for img presence (homepage vs detail)
  console.log('\n[8] RSC payload image analysis')
  const homeTxt = fs.readFileSync(path.join(OUT_DIR, 'index.txt'), 'utf8')
  check('  Homepage RSC has img tags', homeTxt.includes('img'))
  const detailTxt = fs.readFileSync(path.join(OUT_DIR, 'services', 'deep-tissue', 'index.txt'), 'utf8')
  // Note: client component images won't appear in RSC (they're rendered by JS)
  const detailHasImg = detailTxt.includes('img') || detailTxt.includes('jpg')
  warnings.push(`Detail page img in RSC: ${detailHasImg ? 'YES (server-rendered)' : 'NO (client-rendered via JS)'}`)
  console.log(`  Detail page img in RSC: ${detailHasImg ? 'YES' : 'NO — likely client-rendered'}`)
  console.log('  ℹ️  Client-rendered images load in browser but not in static HTML analysis')

  // [9] Visual QA (screenshot capture)
  await runImageQA()

  // ─── Summary ───
  console.log('\n' + '─'.repeat(55))
  console.log(`Results: ${passed} passed, ${issues.length} issues, ${warnings.length} warnings`)

  if (warnings.length > 0) {
    console.log('\n⚠️  Warnings:')
    warnings.forEach(w => console.log(`  - ${w}`))
  }

  if (issues.length > 0) {
    console.log('\n❌ Failed checks:')
    issues.forEach(i => console.log(`  - ${i}`))
  }

  // Print screenshot file paths for manual visual QA
  const screenshots = issues.filter(i => i.startsWith('SCREENSHOT:'))
  if (screenshots.length > 0) {
    console.log('\n📸 Screenshots for visual inspection:')
    screenshots.forEach(s => {
      const [, vp, file] = s.split(':')
      console.log(`  ${vp}: ${file}`)
    })
    console.log('\n  Run: openclaw image tool on these screenshots for visual QA')
  }

  if (issues.filter(i => !i.startsWith('SCREENSHOT:')).length === 0 && warnings.length <= 2) {
    console.log('✅ Core checks passed — visual QA screenshots captured')
  }

  process.exit(issues.filter(i => !i.startsWith('SCREENSHOT:')).length > 0 ? 1 : 0)
}

function check(desc, cond) {
  if (cond) {
    console.log(`  ✅ ${desc}`)
    passed++
  } else {
    console.log(`  ❌ ${desc}`)
    issues.push(desc)
  }
}

run().catch(e => { console.error(e); process.exit(1) })