const { test, expect } = require('@playwright/test');
const { HomePage } = require('../../pages/HomePage');
const { IntegrationsPage } = require('../../pages/IntegrationsPage');

test.describe('TC - Test Integration Elements', () => {
    test('Confirm all integrations are present', async ({ page }) => {
        const home = new HomePage(page);
        const integrations = new IntegrationsPage(page);

        try { 
            console.log('Go to home page')
            await home.goto();
            console.log('Open integrations')
            await home.clickIntegrations();

            const integrationSections = [
            'Azure OpenAI Integration',
            'Salesforce Integration',
            'Genesys Integration',
            'Zendesk Integration',
            'Freshworks Integration',
            'Dynamic 365 Integration',
            'Microsoft Teams Integration',
            'AWS integration'
        ];

        for (const name of integrationSections) {
            await integrations.verifyTextVisible(name);
            }
        } catch (error) {
            await page.screenshot({ path: `screenshots/TC4-Integrations-Fail-${Date.now()}.png`, fullPage: true });
            throw error;
        }
    });
});