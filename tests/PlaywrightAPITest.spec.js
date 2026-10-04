import { test, expect } from '@playwright/test';

test("Validate GET API call", async function ({ request }) {

    const resp = await request.get("https://reqres.in/api/users?page=2")

    expect(resp.status()).toBe(200)

    console.log(resp.statusText())

    //Get API Response as json body
    const jsonResp = await resp.json();
    console.log(jsonResp.total)

    expect(jsonResp.total).toBe(12)

});

test("Validate POST API call", async function ({ request }) {

    const inputData = {
        "username": "admin",
        "password": "password123"

    }
    const response = await request.post("https://restful-booker.herokuapp.com/auth",
        {
            headers: { "Content-Type": "application/json" }
            , data: inputData
        })

    console.log(response.status())
    console.log(await response.json())
    const responseData = await response.json();
    expect(responseData.token).not.toBeNull()

});
