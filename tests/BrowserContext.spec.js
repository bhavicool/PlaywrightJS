//To include test and expect modules in our file
import { test, expect } from '@playwright/test';
const { chromium } = require('playwright');

//Test name and an anonymous function(test function) which takes page object to deal with webelements
test("Verify Application Login", async function({ page })
{

    const browser = await chromium.launch();
    const contextAdmin = await browser.newContext();
    const pageAdmin = await contextAdmin.newPage();

    await pageAdmin.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await pageAdmin.getByPlaceholder("Username").type("Admin")

    //Add a small delay to type password if needed
    await pageAdmin.locator("input[name='password']").type("admin123",{delay:200})

    await pageAdmin.locator("//button[@type='submit']").click()
    
    await expect(pageAdmin).toHaveURL(/dashboard/);

    await contextAdmin.close()
    await browser.close()

});

//Test name and an anonymous function(test function) which takes page object to deal with webelements
test("Verify Application Login 2nd time", async function({ page })
{

    const browser = await chromium.launch();
    const contextAdmin = await browser.newContext();
    const pageAdmin = await contextAdmin.newPage();

    await pageAdmin.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await pageAdmin.getByPlaceholder("Username").type("Admin")

    //Add a small delay to type password if needed
    await pageAdmin.locator("input[name='password']").type("admin123",{delay:200})

    await pageAdmin.locator("//button[@type='submit']").click()
    
    await expect(pageAdmin).toHaveURL(/dashboard/);

    await contextAdmin.close()
    await browser.close()

});
