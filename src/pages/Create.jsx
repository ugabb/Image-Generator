import { useEffect, useState } from "react";
import "./Create.css";
// const { generateImage } = require('../controllers/openaiController')

const Create = () => {
  const [userPrompt, setUserPrompt] = useState("dog zombie");
  const [size, setSize] = useState("");

  const url = 'http://localhost:5000/create'

  const handleSubmit = async (e) => {
    e.preventDefault();


    const image = {
      userPrompt,
      size
    }
  
    console.log(image);

    generateImageRequest(image);
  };

  const generateImageRequest = async (imageInfo) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(imageInfo),
      });

      if (!response.ok) {
        throw new Error("that image could not be generated");
      }

      const data = await response.json();
      console.log(data);

    } catch (error) {
      console.log("Error: ", error.message);
    }
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>Write here what you want to Create!</label>
        <input
          type="text"
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
        />
        <select onChange={(e) => setSize(e.target.value)}>
          <option value="">--SELECT</option>
          <option value="256x256">Small</option>
          <option value="512x512">Medium</option>
          <option value="1024x1024">Large</option>
        </select>
        <button>Create!</button>
      </form>
    </div>
  );
};

export default Create;
