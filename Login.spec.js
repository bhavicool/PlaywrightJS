//To include test and expect modules in our file
import { test, expect } from '@playwright/test';

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