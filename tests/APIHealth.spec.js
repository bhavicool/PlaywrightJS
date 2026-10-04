import { test, extpect } from '@playwright/test';

test("Validate API Health", async function ({ request }) {

    test.setTimeout(0) // Disable timeout for this test
    while (true) {
        const start = Date.now()
        const response = await request.get("https://restful-booker.herokuapp.com/ping")
        const end = Date.now()
        const duration = end - start
        if (duration > 1100) {
            throw new Error("API response is slow")
        }
        else {
            console.log("API response duration is: " + duration)
        }
        console.log("API response code is: " + response.status())
    }
})