import { chromium } from 'playwright'

const BASE = 'http://localhost:3131'
const pages = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
  { name: 'About', path: '/about' },
  { name: 'Booking', path: '/booking' },
  { name: 'Deep Tissue', path: '/services/deep-tissue' },
]

const mobileEmulation = { viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true }
const desktopEmulation = { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1, isMobile: false }

const issues = []

for (const { name, path } of pages) {
  for (const [env, emulation] of [['mobile', mobileEmulation], ['desktop', desktopEmulation]]) {
    const browser = await chromium.launch()
    const page = await browser.newPage()
    await page.setViewportSize(emulation.viewport)

    const consoleErrors = []
    page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()) })
    page.on('pageerror', err => consoleErrors.push(`PAGE ERROR: ${err.message}`))

    try {
      const response = await page.goto(BASE + path, { waitUntil: 'networkidle', timeout: 15000 })
      if (!response || response.status() >= 400) {
        issues.push(`[${env}] ${name} (${path}) — HTTP ${response?.status() || 'no response'}`)
      }

      // Check viewport overflow
      const bodyWidth = await page.evaluate(() => document.body.scrollWidth)
      const windowWidth = await page.evaluate(() => window.innerWidth)
      if (bodyWidth > windowWidth) {
        issues.push(`[${env}] ${name} — horizontal overflow: body=${bodyWidth} window=${windowWidth}`)
      }

      // Check images loaded
      const imgs = await page.evaluate(() =>
        Array.from(document.querySelectorAll('img').map(img => ({
          src: img.src.split('/').pop(),
          naturalWidth: img.naturalWidth,
          complete: img.complete,
        }))
      ))
      imgs.forEach(img => {
        if (!img.complete || img.naturalWidth === 0) {
          issues.push(`[${env}] ${name} — broken image: ${img.src}`)
        }
      })

      if (consoleErrors.length > 0) {
        issues.push(`[${env}] ${name} — console errors: ${consoleErrors.join(' | ')}`)
      }
    } catch (e) {
      issues.push(`[${env}] ${name} — CRASH: ${e.message}`)
    }

    await browser.close()
  }
}

if (issues.length === 0) {
  console.log('✅ QA PASSED — All pages clean on mobile & desktop')
} else {
  console.log('❌ ISSUES FOUND:')
  issues.forEach(i => console.log(' ', i))
}