class GmailLoginPage {
    constructor(page) {
        this.page = page;
        this.emailInput = "input[type='email']";
        this.nextBtn = "#identifierNext";
        this.passwordInput = "input[type='password']";
        this.passwordNextBtn = "#passwordNext";
        this.gmailUrl = "https://accounts.google.com/signin/v2/identifier?service=mail";
    }

    async navigateToGmail() {
        await this.page.goto(this.gmailUrl);
    }

    async enterEmail(email) {
        await this.page.fill(this.emailInput, email);
    }

    async clickNextEmail() {
        await this.page.click(this.nextBtn);
    }

    async enterPassword(password) {
        await this.page.waitForSelector(this.passwordInput, { timeout: 5000 });
        await this.page.fill(this.passwordInput, password);
    }

    async clickNextPassword() {
        await this.page.click(this.passwordNextBtn);
    }

    async getErrorMessage() {
        const errorLocator = this.page.locator("//div[contains(@role, 'alert')]");
        return await errorLocator.textContent();
    }
}

module.exports = GmailLoginPage;
