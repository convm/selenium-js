// const webdriver = require('selenium-webdriver');
// const chrome = require('selenium-webdriver/chrome');
 
// let driver = new webdriver.Builder()
//     .forBrowser('chrome')
//     .setChromeOptions(/* ... */)
//     .build();

//     driver.get('http://www.baidu.com');
//     driver.quit();

const {Builder, By, Key, until} = require('selenium-webdriver');
 
(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://www.baidu.com');

    var kw = await driver.wait(until.elementLocated(By.id('kw')));
    kw.sendKeys('asp.net', Key.RETURN);
    // await driver.findElement(By.id('kw')).sendKeys('有学识', Key.RETURN);
    // await driver.sleep(5000);

    await driver.wait(until.elementLocated(By.id('1')));
    await driver.findElement(By.id('1')).findElement(By.tagName('a')).click();
    await driver.sleep(10000);

    driver.sleep(5000);
  } finally {
    await driver.quit();
  }
})();