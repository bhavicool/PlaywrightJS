class EmployeeSearchPage {
    constructor(page) {
        this.page = page;
        this.pimTab = "//span[text()='PIM']";
        this.employeeNameInput = "//label[text()='Employee Name']/following::input[1]";
        this.searchButton = "//button[@type='submit']";
        this.employeeTableRow = "//div[@class='oxd-table-body']//div[@role='row']";
        this.firstResultName = "//div[@class='oxd-table-body']//div[@role='row'][1]//div[3]";
    }

    async searchEmployeeByName(name) {
        await this.page.locator(this.employeeNameInput).fill(name);
        await this.page.locator(this.searchButton).click();
    }
}

module.exports = EmployeeSearchPage;
