const express = require("express");
const app = express();
const env = require("dotenv").config();
const port = process.env.PORT;

// OPEN AI   ------------------------------
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPEN_API_KEY,
});

const openai = new OpenAIApi(configuration);

// To Accept JSON   ------------------------------
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// Routes    ------------------------------

app.post("/create", async (req, res) => {

    const {prompt, size} = req.body;
    // console.log(body)

//   const imageSize =
//     size === "small" ? "256x256" : size === "medium" ? "512x512" : "1024x1024";

  try {
    const response = await openai.createImage({
      prompt,
      n: 1,
      size,
    });
    const imageURL = response.data.data[0].url;

    res.status(200).json({
      message: "Image Create!",
      sucess: true,
      data: imageURL,
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }

    res.status(400).json({
      success: false,
      error: "The image could not be generated",
    });
  }
});

app.listen(port, console.log(`Server started on port: ${port}`));
