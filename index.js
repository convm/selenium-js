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
    await driver.findElement(By.id('kw')).sendKeys('有学识', Key.RETURN);
    await driver.sleep(5000);
    // await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    await driver.quit();
  }
})();