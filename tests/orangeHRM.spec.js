import { test, expect } from '@playwright/test';
const inputJson = JSON.parse(JSON.stringify(require("../testdata.json")))
const LoginPage=require("../pages/loginpage")
const HomePage=require("../pages/homepage")

test("Check valid login flow", async function ({ page }) {

    const loginPage=new LoginPage(page)
    
    await page.goto(inputJson.applicationURL);
    await page.getByPlaceholder(loginPage.userName).fill(inputJson.userName)
    await page.getByPlaceholder(loginPage.password).fill(inputJson.password)
    await page.locator(loginPage.loginBtn).click()
    await page.waitForTimeout(3000)

});

test("Check valid logout flow", async function ({ page }) {

    const loginPage=new LoginPage(page)
    const homePage=new HomePage(page)
    
    await page.goto(inputJson.applicationURL);
    await page.getByPlaceholder(loginPage.userName).fill(inputJson.userName)
    await page.getByPlaceholder(loginPage.password).fill(inputJson.password)
    await page.locator(loginPage.loginBtn).click()
    await page.waitForTimeout(2000)
    await page.getByText(homePage.profileDropdwon).click()
    await page.getByText(homePage.logout).click()
    await page.waitForTimeout(3000)

});



