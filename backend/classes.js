const { Builder, By, Key, until } = require('selenium-webdriver');

// launch the web browser

// navigate to the web page
// await driver.get('https://example.com');

// select the hour element


 class functions {
    constructor(hour,minute,meridian) {
        this.hour = hour;
        this.minute = minute;
        this.meridian = meridian;
    }
    
    async setHour () {
        const driver = new Builder().forBrowser('chrome').build();
       
        const hour = await driver.findElement(By.id('InputHour'));
        await hour.sendKeys('02', Key.RETURN);

        // select the minute element
        const minute = await driver.findElement(By.id('InputMinute'));
        await minute.sendKeys('45', Key.RETURN);

        // select the meridian element
        const meridian = await driver.findElement(By.id('InputMeridian'));
        await meridian.sendKeys('PM', Key.RETURN);



    }

    async setRestaurant () {
        try {
            const driver = new Builder().forBrowser('chrome').build();

            // const storeNum = await driver.findElement(By.id('InputStoreNum'));
            const storeNum = await driver.findElement(By.name("InputStoreNum"));
            await storeNum.sendKeys('1754');
        } catch(error){
            console.log(error);
        }
    }

}

module.exports = functions