//To include test and expect modules in our file
import { test, expect } from '@playwright/test';
test.use({viewport:{width:1920,height:1080}})

//Test name and an anonymous function(test function) which takes page object to deal with webelements
test("Verify Application Login", async function({ page })
{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.getByPlaceholder("Username").type("Admin")

    //Add a small delay to type password if needed
    await page.locator("input[name='password']").type("admin123",{delay:200})

    await page.locator("//button[@type='submit']").click()
    
    await expect(page).toHaveURL(/dashboard/);

});

test("Verify Application Login Error", async function({ page })
{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.getByPlaceholder("Username").type("Admin")

    //Add a small delay to type password if needed
    await page.locator("input[name='password']").type("admin",{delay:200})

    await page.locator("//button[@type='submit']").click()
    
    const errorMsg=await page.locator("//p[contains(@class,'oxd-alert-content-text')]").textContent();

    expect(errorMsg).toBe('Invalid a');
});