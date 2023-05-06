
const { Builder, By, Key, until } = require('selenium-webdriver');
// const proxy = require('selenium-webdriver/proxy');




require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");

// Set up the OpenAI API client configuration
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // your API key
});

// Create a new OpenAI API client
const openai = new OpenAIApi(configuration);

// Define the prompt and request parameters
const prompt = "write me a reivew on great customer service at the restuarant Wendys";
const request = {
  model: "text-davinci-002", // the language model to use
  prompt, // the prompt to generate text from
  temperature: 0.5, // the "creativity" of the generated text
  max_tokens: 50, // the maximum number of tokens to generate
  n: 1, // the number of different text completions to generate
};




class Functions {

  constructor(driver, hour, minute, meridian,proxy) {
    this.proxy = proxy;
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
    await this.driver.executeScript("arguments[0].value = '04/30/2023'", inputElement);

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
        ////////////// custom reponse HERE /////////////////////
        /////////////////////////////////////////////////
        
        const chatGpt = async (ques) => {
          const prompt = ques;
          // const prompt = "tell me a story about a pig on a farm";
          const request = {
            model: "text-davinci-002", // the language model to use
            prompt, // the prompt to generate text from
            temperature: 0.5, // the "creativity" of the generated text
            max_tokens: 250, // the maximum number of tokens to generate
            n: 1, // the number of different text completions to generate
          };
          
          
          // Use the OpenAI API client to generate text
          return new Promise((res, rej) => {
            openai.createCompletion(request)
              .then (async response => {
                
                  await element.sendKeys(response.data.choices[0].text)
                  res(response.data.choices[0].text);
                  console.log(response.data.choices[0].text)
              })
            .catch(error => {
              console.log(error); // log any errors
              rej(error)
            });

        })

      }
      
      // calling chatGpt Function below to write response for question 12
      await chatGpt("within 250 characters. write a very positive, concise review on the great food and service you had at wendys");

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
        let answer = "fresh food"
        const element = await this.driver.findElement(By.id("S000042"));

        // perform any actions on the element
        await element.click();
        // await element.sendKeys(answer)


        const chatGpt = async (ques) => {
          const prompt = ques;
          // const prompt = "tell me a story about a pig on a farm";
          const request = {
            model: "text-davinci-002", // the language model to use
            prompt, // the prompt to generate text from
            temperature: 0.5, // the "creativity" of the generated text
            max_tokens: 250, // the maximum number of tokens to generate
            n: 1, // the number of different text completions to generate
          };
          
          
          // Use the OpenAI API client to generate text
          return new Promise((res, rej) => {
            openai.createCompletion(request)
            .then (async response => {
              // console.log(response.data.choices[0].text); // log the generated text
                await element.sendKeys(response.data.choices[0].text)
                res(response.data.choices[0].text);
                console.log(response.data.choices[0].text)
            })
            .catch(error => {
              console.log(error); // log any errors
              rej(error);
            });
        })
      }
      
      // calling chatGpt Function below to write response for question 12
      await chatGpt("within 250 characters. write a very positive, yet concise review on how manager Jay and his Crew, went above and beyond to provide you great customer service and fresh food at Wendys");



   }
   async questionTweenty(){
    //  Opt2 inputtyperbloption
        const optElement = await this.driver.findElement(By.className("Opt2 inputtyperbloption"));

        // Select the span inside with class name "radioSimpleInput"
        const radioInput = await optElement.findElement(By.className("radioSimpleInput"));
        await radioInput.click();
   }
   async grabCode(){
    // Find the element with class 'ValCode'
    const validationCodeElement = await this.driver.findElement(By.css('.ValCode'));

    // Get the text content of the element
    const validationCodeText = await validationCodeElement.getText();

    console.log('Validation Code Text:', validationCodeText);
   }

   async ClearCache() {
    // Navigate to your desired page
    //  /html/body/settings-ui//div[2]/settings-main//settings-basic-page//div[1]/settings-section[5]/settings-privacy-page//settings-clear-browsing-data-dialog//cr-dialog/div[4]/cr-button[2]
    // document.querySelector("body > settings-ui").shadowRoot.querySelector("#main").shadowRoot.querySelector("settings-basic-page").shadowRoot.querySelector("#basicPage > settings-section:nth-child(9) > settings-privacy-page").shadowRoot.querySelector("settings-clear-browsing-data-dialog").shadowRoot.querySelector("#clearBrowsingDataConfirm")
    // const element = await this.driver.findElement(By.xpath('//*[@id="basicPage"]/settings-section[5]/settings-privacy-page'));
    // const element = await this.driver.findElement(By.className("action-button"));
    const element = this.driver.findElement(By.xpath('/html/body/settings-ui//div[2]/settings-main//settings-basic-page//div[1]/settings-section[5]/settings-privacy-page//settings-clear-browsing-data-dialog//cr-dialog/div[4]/cr-button[2]'));
    // Find the select element with the class name "md-select" and id "dropdownMenu"
    const button = await this.driver.wait(until.elementLocated(By.xpath('/html/body/settings-ui//div[2]/settings-main//settings-basic-page//div[1]/settings-section[5]/settings-privacy-page//settings-clear-browsing-data-dialog//cr-dialog/div[4]/cr-button[2]')), 10000);

    
    // Perform actions on the secondCrButton, e.g., click
    await button.click();

    // //*[@id="basicPage"]/settings-section[5]/settings-privacy-page
   }
}  





async function run() {

  const chrome = require('selenium-webdriver/chrome');
  //  custom useAgent
  const customUserAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36';
  // setup Chrome options to use the custom userAgent
  const chromeOptions = new chrome.Options();
  chromeOptions.addArguments(`--user-agent=${customUserAgent}`);

    // launch the web browser
    const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(chromeOptions)
    .build();
    const instance = new Functions(driver);

  // navigate to the web page
  const cache = 'chrome://settings/clearBrowserData';
  const wendys = "https://www.wendyswantstoknow.com/"
  await driver.get(wendys) 
  // await instance.ClearCache();
//   await driver.get('https://www.wendyswantstoknow.com/');

  
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
  await instance.grabCode();
  // close the browser
  // await instance.quit();

}

run();


