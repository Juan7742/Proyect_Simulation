import { Configuration, OpenAIApi } from "openai";

//Api key
const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);


export const peticion = async (prompt) => {

    //respuesta
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 50,
      temperature: 0,
    });
    const text = response.data.choices[0].text;

    return text;

   
    console.error("santiago hay un error", error);
  
};

// //////////////////////////
    // const h1 = document.createElement("h1");
    // h1.innerText = text;
    // document.body.append(h1);