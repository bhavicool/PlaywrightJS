//To include test and expect modules in our file
import { test, expect } from '@playwright/test';

//Test name and an anonymous function(test function) which takes page object to deal with webelements
test("Verify Application Title", async function({ page })
{
    //Navigate to the web appication
    //await is used to handle promises as it is async
    //It is mandatory to provide https protocol
    await page.goto("https://www.google.com")  
    
    const appTitle=await page.title()

    //expect("Google").toBe(appTitle);
    await expect(page).toHaveTitle("Google")
});
