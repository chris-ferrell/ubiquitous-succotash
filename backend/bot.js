const { Builder, By, Key, until } = require('selenium-webdriver');

// launch the web browser
const driver = new Builder().forBrowser('chrome').build();

// navigate to the web page
await driver.get('https://example.com');

// select the hour element
// const hour = await driver.findElement(By.id('InputHour'));
// await hour.sendKeys('02', Key.RETURN);

// // select the minute element
// const minute = await driver.findElement(By.id('InputMinute'));
// await minute.sendKeys('45', Key.RETURN);

// // select the meridian element
// const meridian = await driver.findElement(By.id('InputMeridian'));
// await meridian.sendKeys('PM', Key.RETURN);