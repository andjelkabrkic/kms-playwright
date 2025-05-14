const { test, expect } = require('@playwright/test');
const { HomePage } = require('../../pages/HomePage');
const { BookDemoPage } = require('../../pages/BookDemoPage');

test('TC3-validationBookADemo', async ({ page }) => {
    const home = new HomePage(page);
    const demoForm = new BookDemoPage(page);

    try {
        console.log('Go to home page');
        await home.goto();
        console.log('Confirm demo button');
        await expect(home.DemoButton).toBeVisible();
        console.log('Click on demo button')
        await home.clickDemo();
        console.log('Verify link')
        await expect(page).toHaveURL(/book|demo|request/i);
        console.log('Verify fields')
        await expect(demoForm.firstNameInput).toBeVisible();
        await expect(demoForm.firstNameInput).toBeEnabled();
        await expect(demoForm.lastNameInput).toBeVisible();
        await expect(demoForm.lastNameInput).toBeEnabled();
        await expect(demoForm.emailInput).toBeVisible();
        await expect(demoForm.emailInput).toBeEnabled();
        await expect(demoForm.phoneInput).toBeVisible();
        await expect(demoForm.phoneInput).toBeEnabled();
        await expect(demoForm.jobInput).toBeVisible();
        await expect(demoForm.jobInput).toBeEnabled();
        await expect(demoForm.messageInput).toBeVisible();
        await expect(demoForm.messageInput).toBeEnabled();
        await expect(demoForm.submitButton).toBeVisible();
        await expect(demoForm.submitButton).toBeEnabled();
    } catch (error) {
        await page.screenshot({ path: `screenshots/TC3-ValidationBookADemo-${Date.now()}.png`, fullPage: true });
        throw error;
    }
});