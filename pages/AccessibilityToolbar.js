const { expect } = require('@playwright/test');

class AccessibilityToolbar {
    constructor(page) {
        this.page = page;

        this.increaseTextToggle = page.locator('.acwp-toggler-incfont .acwp-switch')
        this.contrastToggle = page.locator('[data-name="contrast"]');
        this.dyslexiaToggle = page.locator('[data-name="readable"]');
        this.highlightLinksToggle = page.locator('[data-name="underline"]');
    }

    async checkAllTogglesVisible() {
        await this.increaseTextToggle.waitFor({ state: 'visible', timeout: 5000 });
        await expect(this.increaseTextToggle).toBeVisible();
        await expect(this.contrastToggle).toBeVisible();
        await expect(this.dyslexiaToggle).toBeVisible();
        await expect(this.highlightLinksToggle).toBeVisible();
    }

    async getFontSize() {
        return await this.page.evaluate(() => window.getComputedStyle(document.body).fontSize);
    }
    async toggleIncreaseFont() {
        await this.increaseTextToggle.scrollIntoViewIfNeeded();
        await this.increaseTextToggle.click({ force: true });
    }
}

module.exports = { AccessibilityToolbar };