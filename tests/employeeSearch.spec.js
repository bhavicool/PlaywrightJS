import { test, expect } from '@playwright/test';
const inputJson = JSON.parse(JSON.stringify(require("../testdata.json")));
const LoginPage = require("../pages/loginpage");
const EmployeeSearchPage = require("../pages/employeeSearchpage");

test("Check employee search flow", async function ({ page }) {
    const loginPage = new LoginPage(page);
    const employeeSearchPage = new EmployeeSearchPage(page);

    await page.goto(inputJson.applicationURL);
    await page.getByPlaceholder(loginPage.userName).fill(inputJson.userName);
    await page.getByPlaceholder(loginPage.password).fill(inputJson.password);
    await page.locator(loginPage.loginBtn).click();

    await page.waitForURL(/dashboard/, { timeout: 10000 });

    await page.locator(employeeSearchPage.pimTab).click();
    await page.waitForSelector(employeeSearchPage.employeeNameInput, { timeout: 10000 });

    await employeeSearchPage.searchEmployeeByName("Linda");

    const firstRow = page.locator(employeeSearchPage.employeeTableRow).first();
    await expect(firstRow).toBeVisible();
    await expect(page.locator(employeeSearchPage.firstResultName)).toContainText(/Linda/i);
});
