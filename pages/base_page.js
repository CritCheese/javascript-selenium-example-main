const { Builder, By, Key, WebDriver, until, Actions, ActionChains, WebElement} = require("selenium-webdriver");
const { elementsMap, inputsMap } = require('../locators/locators.js')

const timeout = 5000;
class BasePage{
    async goToUrl(webdriver, url){
        await (await webdriver).get(url)
    }

    async getText(webdriver, locator){
        //get text of element
        var value = await (await webdriver).wait(until.elementLocated(locator), timeout).getText();
        return value;
    }

    async clickElement(webdriver, locator){
        //click element using xpath
        let click = await (await webdriver).findElement(By.xpath(locator))
        const actions = await (await webdriver).actions({async: true});
        var actionClick = await actions.move({origin: click}).click().perform();
        return actionClick
    }

    async reloadPage(webdriver){
        //reload a page
        await (await webdriver).navigate().refresh()
    }

    async scrollToElement(webdriver, element){
        //find element then scroll to it
        const elementXpath = await (await webdriver).findElement(By.xpath(elementsMap.get(element)))
        await (await webdriver).actions().scroll(0,0,0,0,elementXpath).perform()
    }

    async enterText(webdriver, element, text){
        //enter text to input element
        await (await webdriver).findElement(By.xpath(inputsMap.get(element))).sendKeys(text)
        await (await webdriver).sleep(5000)
    }

    async clearText(webdriver, element){
        //clear text in an element
        await (await webdriver).findElement(By.xpath(inputsMap.get(element))).click()
        await (await webdriver).actions().keyDown(Key.CONTROL).sendKeys('a').keyUp(Key.CONTROL).sendKeys(Key.DELETE).perform()
        await (await webdriver).sleep(5000)
    }

    async fetchTable(webdriver, element) {
        //fetch data from table
        let table = await (await webdriver).findElement(By.xpath(elementsMap.get(element)))
        //...
    }
}
module.exports = BasePage;