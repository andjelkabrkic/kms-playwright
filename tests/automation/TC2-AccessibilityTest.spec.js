const { test, expect } = require('@playwright/test');
const { HomePage } = require('../../pages/HomePage');
const { AccessibilityToolbar } = require('../../pages/AccessibilityToolbar');

test.describe('TC2 - Accessibility Toolbar', () => {
  test('Check Accessibility', async ({ page }) => {
    const home = new HomePage(page);
    const toolbar = new AccessibilityToolbar(page);
      try {
          console.log('Go to home page');
          await home.goto();
          await home.clickOurSolutions();
          console.log('Get Font Size of header:original');
          const originalFont = await home.getFontSizeOf('#dropdown_menu-0');

          console.log('Open Accessibility toolbar');
          await home.openAccessibilityToolbar();
          console.log('Check all toglles');
          await toolbar.checkAllTogglesVisible();

          console.log('Increase font');
          await toolbar.toggleIncreaseFont();
          await page.waitForTimeout(5000);
          await home.clickOurSolutions();
          const increasedFont = await home.getFontSizeOf('#dropdown_menu-0');
          console.log('Get Font Size of header:', increasedFont);

          expect(increasedFont).not.toBe(originalFont);
          console.log('Reset font size');
          await toolbar.toggleIncreaseFont();
          await page.waitForTimeout(1000);

          const resetFont = await home.getFontSizeOf('#dropdown_menu-0');
          expect(resetFont).toBe(originalFont);
      } catch (error) {
          await page.screenshot({ path: `screenshots/TC2-Accessibility-Fail-${Date.now()}.png`, fullPage: true });
          throw error;
      }
  });
});