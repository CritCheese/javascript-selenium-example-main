const { linksMap } = require('../locators/locators.js')
const assert = require("assert");
const DriverUtils = require("../driverUtils/driver_utils.js");
const GoogleHomePage = require("../pages/google_home_page.js");
const BasePage = require("../pages/base_page.js");
const Environment = require("../environment_config/environment.js");
const userOnGoogleHomePage = new GoogleHomePage();
var basePage = new BasePage();
const environment = new Environment();

var driverUtils = new DriverUtils();;
var driver;

//hooks used from mocha to run setup and teardown
describe("Google Home Page Test 1", function () {

    before(() => {
        environment.set_up();
    })

    before(async () => {
        access_home_page();
    })

    it("check gmail label", async function () {
        var label = await userOnGoogleHomePage.getGmailLabel(driver);
        await assert.strictEqual(label, "Gmail");
    })

    it('click Image link', async function () {
        var actionClick = await basePage.clickElement(driver, linksMap.get('image'))
    })

    it("check refresh page", async () => {
        var label = await basePage.reloadPage(driver)
    })

    it ('enter text to search field', async function (){
        await basePage.enterText(driver, 'search', 'google')
    })

    it ('clear search text field', async function (){
        await basePage.clearText(driver, 'search')
    })

    after(async () => {
        quit_aut();
    })
})

async function access_home_page() {
    driver = driverUtils.initBrowser();
    await driverUtils.navigateToUrl(driver, environment.data.url);
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