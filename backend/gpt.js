require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");

// Set up the OpenAI API client configuration
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // your API key
});

// Create a new OpenAI API client
const openai = new OpenAIApi(configuration);

// Define the prompt and request parameters
const prompt = "tell me a story about a pig on a farm";
const request = {
  model: "text-davinci-002", // the language model to use
  prompt, // the prompt to generate text from
  temperature: 0.5, // the "creativity" of the generated text
  max_tokens: 50, // the maximum number of tokens to generate
  n: 1, // the number of different text completions to generate
};

const chatGpt = (ques) => {
    const prompt = ques;
    // const prompt = "tell me a story about a pig on a farm";
    const request = {
        model: "text-davinci-002", // the language model to use
        prompt, // the prompt to generate text from
        temperature: 0.5, // the "creativity" of the generated text
        max_tokens: 50, // the maximum number of tokens to generate
        n: 1, // the number of different text completions to generate
    };


        // Use the OpenAI API client to generate text
    openai.createCompletion(request)
    .then(response => {
    // console.log(response.data.choices[0].text); // log the generated text
        console.log(response.data.choices[0].text)
    })
    .catch(error => {
    console.log(error); // log any errors
    });
}

chatGpt("write me a story about a hard working ant.");
// Use the OpenAI API client to generate text
// openai.createCompletion(request)
//   .then(response => {
//     console.log(response.data.choices[0].text); // log the generated text
//   })
//   .catch(error => {
//     console.log(error); // log any errors
//   });
