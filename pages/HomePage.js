const { expect } = require('@playwright/test');

class HomePage {
    constructor(page) {
        this.page = page;
 
        this.ourSolutionsTab = page.locator('a.header_panel__nav-list-link:has-text("Our Solutions")');

        this.solutionLink = (text) =>
            page.locator('a.header_panel__nav-dropdown-link').filter({ hasText: text });

        this.bookDemoButton = page.locator('a.elementor-button-link:has-text("Get a tailored demo today")').nth(0);

        this.DemoButton = page.locator('a.header_panel__button:has-text("Book a Demo")');

        this.accessibilityIcon = page.locator('#acwp-toolbar-btn');

        this.integrationsTab = page.locator('a.header_panel__nav-list-link:has-text("Integrations")')
    }


    async goto() {
        await this.page.goto('https://kmslh.com');
    }


    async clickOurSolutions() {
        await this.ourSolutionsTab.click();
    }

    async clickIntegrations() {
        await this.integrationsTab.click();
    }

    async clickSolution(linkText) {
        const link = this.solutionLink(linkText);
        await link.waitFor({ state: 'visible', timeout: 5000 });
        await link.click();
    }


    async clickBookDemo() {
        const button = this.bookDemoButton;

        await button.scrollIntoViewIfNeeded();

        await expect(button).toBeVisible({ timeout: 5000 });

        await button.click();
    }

    async clickDemo() {
        const button = this.DemoButton;

        await expect(button).toBeVisible({ timeout: 5000 });

        await button.click();
    }

    async openAccessibilityToolbar() {
        await expect(this.accessibilityIcon).toBeVisible();
        await this.accessibilityIcon.click();
    }


    async getFontSizeOf(selector) {
        return await this.page.evaluate((sel) => {
            const el = document.querySelector(sel);
            return el ? window.getComputedStyle(el).fontSize : null;
        }, selector);
    }
}

module.exports = { HomePage };
