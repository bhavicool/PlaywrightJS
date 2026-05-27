import { test, expect } from '@playwright/test';
import GmailLoginPage from '../pages/gmailLoginPage.js';

test.use({ viewport: { width: 1920, height: 1080 } });

test("Gmail - Verify Login with Valid Credentials", async function({ page }) {
    const gmailLogin = new GmailLoginPage(page);

    await gmailLogin.navigateToGmail();

    // Enter valid email - UPDATE with your test email
    await gmailLogin.enterEmail("your-test-email@gmail.com");
    await gmailLogin.clickNextEmail();

    // Enter valid password - UPDATE with your test password
    await gmailLogin.enterPassword("your-test-password");
    await gmailLogin.clickNextPassword();

    // Wait for Gmail inbox to load
    await expect(page).toHaveURL(/mail\.google\.com/, { timeout: 10000 });
});

test("Gmail - Verify Login with Invalid Email", async function({ page }) {
    const gmailLogin = new GmailLoginPage(page);

    await gmailLogin.navigateToGmail();

    // Enter invalid email format
    await gmailLogin.enterEmail("invalid-email-format");
    await gmailLogin.clickNextEmail();

    // Verify error message appears
    const errorMsg = await gmailLogin.getErrorMessage();
    expect(errorMsg).toBeTruthy();
});

test("Gmail - Verify Login with Invalid Password", async function({ page }) {
    const gmailLogin = new GmailLoginPage(page);

    await gmailLogin.navigateToGmail();

    // Enter valid email
    await gmailLogin.enterEmail("your-test-email@gmail.com");
    await gmailLogin.clickNextEmail();

    // Enter invalid password
    await gmailLogin.enterPassword("wrong-password");
    await gmailLogin.clickNextPassword();

    // Verify error message appears
    await page.waitForTimeout(2000);
    const errorMsg = await gmailLogin.getErrorMessage();
    expect(errorMsg).toBeTruthy();
});
