const assert = require("assert");
const DriverUtils = require("../driverUtils/driver_utils");
const Environment = require("../environment_config/environment");
const environment = new Environment();
const BasePage = require("../pages/base_page.js");
var basePage = new BasePage();
var driverUtils = new DriverUtils();;
var driver;

//hooks used from mocha to run setup and teardown
describe("Example Test 2", function () {

    before(() => {
        environment.set_up();
    })

    before( () => {
        access_home_page();
    })

    //example of navigate to url
    describe("Table test example", function () {
        it('Go to JavaScript Number Methods page on W3Schools', async function () {
            await basePage.goToUrl(driver, 'https://www.w3schools.com/js/js_number_methods.asp');
        })

        it('Go to Google', async function () {
            await basePage.goToUrl(driver, 'https://www.google.com');
        })

        it("check refresh page", async () => {
            var label = await basePage.reloadPage(driver)
        })
    })

    after(() => {
        quit_aut();
    })
})

async function access_home_page() {
    driver = driverUtils.initBrowser();
    await driverUtils.navigateToUrl(driver, environment.url);
}

function quit_aut() {
    driverUtils.quitBrowser(driver);
}

async function example() {
    console.log("Test example")
}

async function example1() {
    console.log("Test example 1")
}
module.exports = { example, example1 };