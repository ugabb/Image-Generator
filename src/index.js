const express = require("express");
const app = express();
const env = require("dotenv").config();
const port = process.env.PORT;
const cors = require('cors');

// To Accept JSON  and body data  ------------------------------
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
// Routes    ------------------------------
app.use('/openai',require('./routes/openAiRoutes'));

app.listen(port, console.log(`Server started on port: ${port}`));
