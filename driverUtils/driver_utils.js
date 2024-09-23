const { Builder, By, Key, WebDriver } = require("selenium-webdriver")
const Environment = require("../environment_config/environment")
require("chromedriver")
require("geckodriver")
require("edgedriver")
const environment = new Environment();

class DriverUtils {
    constructor(){
        this.driver;
    }

    //build webdriver based on browser
    async initBrowser() {
        switch (environment.test_browser) {
            case "chrome":
                this.driver = await new Builder().forBrowser("chrome").build();
                break;
            case "firefox":
                this.driver = await new Builder().forBrowser("firefox").build();
                break;
            case "edge":
                this.driver = await new Builder().forBrowser("MicrosoftEdge").build();
                break;
            default:
                this.driver = await new Builder().forBrowser("chrome").build();
                break;
        }
        await this.driver.manage().window().maximize();
        return this.driver;
    }

    //quit webdriver
    async quitBrowser(driver) {
        (await driver).quit();
    }

    //navigate to url with webdriver
    async navigateToUrl(driver, url) {
        await (await driver).get(url);
    }

    //refresh web page
    async refreshPage(driver){
        await (await driver).navigate().refresh();
        console.log("Page refreshed")
    }

}

module.exports = DriverUtils;