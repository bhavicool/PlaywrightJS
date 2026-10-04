import { test, expect } from '@playwright/test';
import fs from "fs";

test('Integrated API Flow', async ({ request }) => {
    // Step 1: Create a new booking        
    const fileRead = fs.readFileSync('inputData/bookingData.json', 'utf-8');
    const jsonInput = JSON.parse(fileRead);

    const postResponse = await request.post("https://restful-booker.herokuapp.com/booking",
        {
            headers: { "Content-Type": "application/json" }
            , data: jsonInput
        })

    const responseData = await postResponse.json();
    const bookingId = responseData.bookingid;
    console.log("Booking Id is:" + bookingId)
    expect(postResponse.status()).toBe(200);

    //Step 2: Get the created booking
    const getResponse = await request.get(`https://restful-booker.herokuapp.com/booking/${bookingId}`,
        {
            headers: { "Accept": "application/json" }
        })
    console.log(await getResponse.json())
    expect(getResponse.status()).toBe(200);

    //Step 3: Update the created booking
    const inputData = {
        "username": "admin",
        "password": "password123"
    }
    const response = await request.post("https://restful-booker.herokuapp.com/auth",
        {
            headers: { "Content-Type": "application/json" }
            , data: inputData
        })

    const tokenResponseData = await response.json();
    const token = tokenResponseData.token;

    const fileReadUpdate = fs.readFileSync('inputData/updatedBookingData.json', 'utf-8');
    const jsonUpdatedInput = JSON.parse(fileReadUpdate);
    const updatedResponse = await request.put(`https://restful-booker.herokuapp.com/booking/${bookingId}`,
        {
            headers: {
                "Content-Type": "application/json", "Accept": "application/json"
                , "Cookie": "token=" + token
            },
            data: jsonUpdatedInput
        })

    console.log(updatedResponse.status())
    const putResponseJson = await updatedResponse.json();
    expect(putResponseJson.firstname).toBe("Virat");

    //Delete the created booking
    const deleteResponse = await request.delete(`https://restful-booker.herokuapp.com/booking/${bookingId}`,
        {
            headers: {
                "Content-Type": "application/json", "Accept": "application/json",
                "Cookie": "token=" + token
            }
        })

    expect(deleteResponse.status()).toBe(201);

    //Final step to get the created booking after deletion to validate the deletion
    const finalGetResponse = await request.get("https://restful-booker.herokuapp.com/booking/${bookingId}`",
        {
            headers: { "Accept": "application/json" }
        })

    expect(finalGetResponse.status()).toBe(404)

})