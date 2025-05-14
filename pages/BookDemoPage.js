const { expect } = require('@playwright/test');

class BookDemoPage {
    constructor(page) {
        this.page = page;
        this.firstNameInput = page.locator('input[name="firstname"]');
        this.lastNameInput = page.locator('input[name="lastname"]')
        this.emailInput = page.locator('input[type="email"]');
        this.phoneInput = page.locator('input[type="tel"]');
        this.jobInput = page.locator('input[name="jobtitle"]');
        this.messageInput = page.locator('//textarea[@name="message"]');;
        this.submitButton = page.locator('button[type="submit"], input[type="submit"]');
    }

    async fillForm({ firstName, lastName, email, phone, job, message }) {
        await expect(this.firstNameInput).toBeVisible();
        await this.firstNameInput.fill(firstName);

        await expect(this.lastNameInput).toBeVisible();
        await this.lastNameInput.fill(lastName);

        await expect(this.emailInput).toBeVisible();
        await this.emailInput.fill(email);

        await expect(this.phoneInput).toBeVisible();
        await this.phoneInput.fill(phone);

        await expect(this.jobInput).toBeVisible();
        await this.jobInput.fill(job);

        await expect(this.messageInput).toBeVisible();
        await this.messageInput.fill(message);
    }

    async submitForm() {
        await expect(this.submitButton).toBeVisible();
        await this.submitButton.click();
    }
}

module.exports = { BookDemoPage };