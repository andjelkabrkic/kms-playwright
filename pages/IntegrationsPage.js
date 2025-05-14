const { expect } = require('@playwright/test');

class IntegrationsPage {
    constructor(page) {
        this.page = page;
    }
    async verifyTextVisible(text) {
        const visibleLocator = this.page.locator('h2.elementor-heading-title', { hasText: text }).filter({ has: this.page.locator(':visible') });

        await visibleLocator.first().scrollIntoViewIfNeeded();
        await expect(visibleLocator.first()).toBeVisible({ timeout: 5000 });
    }
}

module.exports = { IntegrationsPage };