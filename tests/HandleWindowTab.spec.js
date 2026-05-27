//To include test and expect modules in our file
import { test, expect } from '@playwright/test';


test("Handle multiple windows", async function({ browser })
{
    
    const browserContext=await browser.newContext();
    const firstPage=await browserContext.newPage();

    await firstPage.goto("https://the-internet.herokuapp.com/upload")  
   
    const [secondPage]=await Promise.all(
        [

            browserContext.waitForEvent("page"),
            firstPage.locator("//a[text()='Elemental Selenium']").click()
        ]
    )
      await secondPage.locator("//a[text()='Beginner']").click()
      secondPage.close()
    
      await firstPage.waitForTimeout(4000)
      firstPage.close()
});
