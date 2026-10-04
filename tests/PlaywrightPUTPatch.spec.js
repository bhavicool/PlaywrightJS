import { test, expect } from '@playwright/test';

test("Validate PUT API call", async function ({ request }) {

    const inputData = {
        "username": "admin",
        "password": "password123"

    }
    const response = await request.post("https://restful-booker.herokuapp.com/auth",
        {
            headers: { "Content-Type": "application/json" }
            , data: inputData
        })

    const responseData = await response.json();
    const token = responseData.token;
    console.log(token)

    const updatedData = {
        "firstname": "Rahul",
        "lastname": "Brown",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": "Breakfast"


    }
    const putResponse = await request.put("https://restful-booker.herokuapp.com/booking/1",
        {
            headers: { "Content-Type": "application/json", "Accept": "application/json", "Cookie": "token=" + token }
            , data: updatedData
        })

        console.log(putResponse.status())
        console.log(await putResponse.json())
});