import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4000;
const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
});
const openai = new OpenAIApi(configuration);

// Welcome Screen
app.get("/", (req, res) => {
  return res.status(200).send({ message: "Healthy" });
});

// Chat Service
app.post("/chat-service", async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${prompt}
               ###
               `,
      max_tokens: 100,
      temperature: 0,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });

    return res
      .status(200)
      .json({ success: true, data: response.data.choices[0].text });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.response
        ? error.response.data
        : "There was an issue on server",
    });
  }
});

app.listen(PORT, () => {
  console.log(`OPEN_AI: server is running on port ${PORT}.`);
});
