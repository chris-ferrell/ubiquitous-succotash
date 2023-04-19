
const { Builder, By, Key, until } = require('selenium-webdriver');

class Functions {
  constructor(driver, hour, minute, meridian) {
    this.driver = driver;
    this.hour = hour;
    this.minute = minute;
    this.meridian = meridian;
  }

  async setHour() {
    const hour = await this.driver.findElement(By.id('InputHour'));
    await hour.sendKeys('02', Key.RETURN);

    // select the minute element
    const minute = await this.driver.findElement(By.id('InputMinute'));
    await minute.sendKeys('45', Key.RETURN);

    // select the meridian element
    const meridian = await this.driver.findElement(By.id('InputMeridian'));
    await meridian.sendKeys('PM', Key.RETURN);
  }

  async setRestaurant() {
    try {
      // const storeNum = await this.driver.findElement(By.id('InputStoreNum'));
      const storeNum = await this.driver.findElement(By.name("InputStoreNum"));
      await storeNum.sendKeys('1754');
    } catch (error) {
      console.log(error);
    }
  }
  async setDate() {
    // locate the input element by its id
    const inputElement = await this.driver.findElement(By.id("Index_VisitDateDatePicker"));

    // set the value of the input element using JavaScript executor
    await this.driver.executeScript("arguments[0].value = '04/18/2023'", inputElement);

  }

  async selectYesNo() {

    // locate the element by its aria-describedby attribute
    const element = await this.driver.findElement(By.className("Opt1 inputtyperbloption"));

    // perform any actions on the element
    await element.click();

  }
 
  async nextButton() {
    const NextButton = await this.driver.findElement(By.id("NextButton"));
    await NextButton.click();
  }

  async questionThreeDinein() {
    // locate the first element with the class radioButtonHolder
    const element = await this.driver.findElement(By.css(".radioButtonHolder:first-child"));

    // perform any actions on the element
    await element.click();



   }
   async questionFour() {
    // locate the element by its aria-describedby attribute
    const element = await this.driver.findElement(By.className("Opt5 inputtyperbloption"));

    // perform any actions on the element
    await element.click();
   }
   async questionFive() {

    const element = await this.driver.findElement(By.css(".radioButtonHolder:first-child"));

    // perform any actions on the element
    await element.click();

   }
   async questionSix() {
    // // radioSimpleInput
    // const element = await this.driver.findElement(By.css(".radioSimpleInput:first-child"));
    // const element = await this.driver.findElement(By.css(".radioSimpleInput:nth-of-type(1)"))

    const highlySatisfiedOptions = await this.driver.findElements(By.css('td.Opt5'));

    // Click each 'Highly Satisfied' option
    for (let option of highlySatisfiedOptions) {
      await option.click();
        }   
    }  
//    6  11 16  21
    async questionSeven(){
        // Opt5 inputtyperbloption radioSimpleInput
        //  S000024
        const element = await this.driver.findElement(By.css(".radioSimpleInput:first-child"));

        // perform any actions on the element
        await element.click();

    }
    async questionEight(){
        const element = await this.driver.findElement(By.css(".radioSimpleInput:first-child"));

        // perform any actions on the element
        await element.click();
    }
    // add N/A option 
    // N/A added, add a param to flick between the two 
   async questionNine(){
        // Locate the element with class name "Opt9 inputtyperbloption"
        const optElement = await this.driver.findElement(By.className("Opt9 inputtyperbloption"));

        // Select the span inside with class name "radioSimpleInput"
        const radioInput = await optElement.findElement(By.className("radioSimpleInput"));
        await radioInput.click();

    //////// add logic to flip between the two, working code below just add logic
        // const element = await this.driver.findElement(By.css(".radioSimpleInput:first-child"));

        
        // await element.click();

   }
   async questionEleven() {
        const element = await this.driver.findElement(By.css(".radioSimpleInput:first-child"));

        
        await element.click();
   }
   async questionTwelve() {
    // S000024
        const element = await this.driver.findElement(By.id("S000024"));

        // await meridian.sendKeys('PM', Key.RETURN);
        await element.click();
        await element.sendKeys('service was AMAZING')
   }
   async questionThirteen(){
        const optElement = await this.driver.findElement(By.className("Opt4 rbloption"));

        // Select the span inside with class name "radioSimpleInput"
        const radioInput = await optElement.findElement(By.className("radioSimpleInput"));
        await radioInput.click();
   }
   // 1, 3, 5, 7
   async questionFourteen(){
        function chooseRandomNumberFromArray(array) {
            const randomIndex = Math.floor(Math.random() * array.length);
            return array[randomIndex];
        }
      
        // Example usage
        const anotherArray =['Opt3 rbloption','Opt1 rbloption', 'Opt4 rbloption', 'Opt2 rbloption']
        const myArray = [1, 3, 5, 7];
        const randomNumber = chooseRandomNumberFromArray(anotherArray);

        const optElement = await this.driver.findElement(By.className('Opt1 rbloption'));

        // Select the span inside with class name "radioSimpleInput"
        const radioInput = await optElement.findElement(By.className("radioSimpleInput"));
        await radioInput.click();
        // console.log(randomNumber);
        
   }    
   async questionFifteen(){
    //  Opt1 inputtyperbloption
        const optElement = await this.driver.findElement(By.className("Opt1 inputtyperbloption"));

        // Select the span inside with class name "radioSimpleInput"
        const radioInput = await optElement.findElement(By.className("radioSimpleInput"));
        await radioInput.click();
   }
   async quesitonSixteen() {
        function chooseRandomClassFromArray(array) {
            const randomIndex = Math.floor(Math.random() * array.length);
            return array[randomIndex];
        }
        const classArray =['Opt7 rbloption',
                            'Opt9 rbloption',
                            'Opt8 rbloption',
                            'Opt28 rbloption',
                            'Opt2 rbloption',
                            'Opt5 rbloption',
                            'Opt10 rbloption',
                            'Opt29 rbloption',
                            'Opt6 rbloption',
                            'Opt3 rbloption',
                            'Opt4 rbloption',
                            'Opt1 rbloption',]

        
        const randomClass = chooseRandomClassFromArray(classArray);
        const optElement = await this.driver.findElement(By.className(randomClass));
        console.log(randomClass)
        // Select the span inside with class name "radioSimpleInput"
        const radioInput = await optElement.findElement(By.className("radioButtonHolder"));
        await radioInput.click();

    }
   async questionSeventeen(){
        const element = await this.driver.findElement(By.css(".radioSimpleInput:first-child"));

        // perform any actions on the element
        await element.click();
        
   }
   async questionEighteen(){
        const element = await this.driver.findElement(By.css(".radioSimpleInput:first-child"));

        // perform any actions on the element
        await element.click();
   }
   async questionNineteen(){
    // S000042
        let answer = " Wendy's staff was welcoming, friendly, and attentive. They provided recommendations, refilled drinks, and checked on customers."
        const element = await this.driver.findElement(By.id("S000042"));

        // perform any actions on the element
        await element.click();
        await element.sendKeys(answer)

   }
   async questionTweenty(){
    //  Opt2 inputtyperbloption
        const optElement = await this.driver.findElement(By.className("Opt2 inputtyperbloption"));

        // Select the span inside with class name "radioSimpleInput"
        const radioInput = await optElement.findElement(By.className("radioSimpleInput"));;
        await radioInput.click();
   }
}  
async function run() {
  // launch the web browser
  const driver = await new Builder().forBrowser('chrome').build();

  // navigate to the web page
  await driver.get('https://www.wendyswantstoknow.com/');

  const instance = new Functions(driver);
  // await instance.setHour();
  await instance.setRestaurant();
  await instance.setDate();
  await instance.setHour();
  await instance.selectYesNo();
  await instance.nextButton();
  await instance.questionThreeDinein();
  await instance.nextButton();
  await instance.questionFour();
  await instance.nextButton();
  await instance.questionFive();
  await instance.nextButton();
  await instance.questionSix();
  await instance.nextButton();
  await instance.questionSeven();
  await instance.nextButton();
  await instance.questionEight();
  await instance.nextButton();
  await instance.questionNine();
  await instance.nextButton();
  await instance.nextButton(); // question 10 asks for a problem encountered, no problem encountered skipped
  await instance.questionEleven();
  await instance.nextButton();
  await instance.questionTwelve();
  await instance.nextButton();
  await instance.questionThirteen();
  await instance.nextButton();
  await instance.questionFourteen();
  await instance.nextButton();
  await instance.questionFifteen();
  await instance.nextButton();
  await instance.quesitonSixteen();
  await instance.nextButton();
  await instance.questionSeventeen();
  await instance.nextButton();
  await instance.questionEighteen();
  await instance.nextButton();
  await instance.questionNineteen();
  await instance.nextButton();
  await instance.questionTweenty();
  await instance.nextButton();
  // close the browser
//   await driver.quit();
}

run();






// const { Builder } = require('selenium-webdriver');
// ////imports/////////
// const functions = require('./classes.js')
// ////////////////////
// async function run() {
//   // launch the web browser
//   const driver = await new Builder().forBrowser('chrome').build();

//   // navigate to the web page
//   await driver.get('https://www.wendyswantstoknow.com/');

//  const instance = new functions();
// //  await instance.setHour();
//  await instance.setRestaurant();
//   // close the browser
// //   await driver.quit();
// }

// run();

// select the hour element
// const hour = await driver.findElement(By.id('InputHour'));
// await hour.sendKeys('02', Key.RETURN);

// // select the minute element
// const minute = await driver.findElement(By.id('InputMinute'));
// await minute.sendKeys('45', Key.RETURN);

// // select the meridian element
// const meridian = await driver.findElement(By.id('InputMeridian'));
// await meridian.sendKeys('PM', Key.RETURN);