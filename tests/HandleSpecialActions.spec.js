import { test, expect } from '@playwright/test';
test.use({ viewport: { width: 1920, height: 1080 } })

//Test name and an anonymous function(test function) which takes page object to deal with webelements
test("Peform DropDown Action", async function ({ page }) {
    page.goto("https://freelance-learn-automation.vercel.app/signup")

    await page.locator("#state").selectOption({ label: "Goa" })

    await page.locator("#state").selectOption({ value: "Maharashtra" })

    await page.locator("#state").selectOption({ index: 4 })

    await page.locator("#hobbies").selectOption(['Playing', 'Swimming'])

});

test("Peform Mouse Hover", async function ({ page }) {
    page.goto("https://www.amazon.in/")

    await page.locator("//span[contains(text(),'Account & List')]").hover();

    await page.waitForTimeout(3000)
});

test("Peform File Upload", async function ( page ) {
    page.goto("https://the-internet.herokuapp.com/upload")

    await page.locator("#file-upload").setInputFiles("C:/ImpDocs/abc.txt");
});

test("Peform Keyboard Actions", async function ({ page }) {
    page.goto("https://www.google.com/")

    await page.locator("//textarea[@title='Søg']").type("MitID")

    await page.keyboard.press('Enter');

    await page.waitForTimeout(6000)
});