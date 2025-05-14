const { test, expect } = require('@playwright/test');
const { HomePage } = require('../../pages/HomePage');
const testData = require('../../data/ourSolutionsLinks.json');

test.describe('TC1 - Verify Our Solutions links and Book a Demo button', () => {
    for (const item of testData) {
        test(`Click ${item.linkText} and verify URL & Book a Demo`, async ({ page }) => {
            const home = new HomePage(page);
            try {
                console.log(`Go to home page`);
                await home.goto();
                console.log('Click our solutions tab')
                await home.clickOurSolutions();
                console.log('Click on solution link ');
                await home.clickSolution(item.linkText);
                console.log('Verify link');
                await expect(page).toHaveURL(new RegExp(item.expectedUrl));
                await expect(home.bookDemoButton).toBeVisible();

                await home.clickBookDemo();
                await expect(page).toHaveURL('https://kmslh.com/book-a-demo/');
            } catch (error) {
                await page.screenshot({ path: `screenshots/TC1-${item.linkText.replace(/\s+/g, '_')}-${Date.now()}.png`, fullPage: true });
                throw error;
            }
        });
    }
});