import { test, expect } from '@playwright/test';

test("Try different expects", async function({  })
{
    expect("Rahul Dravid").toContain("Dravid");
    expect(true).toBeTruthy()
    expect(false).toBeFalsy()
    expect("Rahul Dravid".includes("Dravid")).toBeFalsy()
    expect("Rahul Dravid"==="abc").toBeTruthy()

});