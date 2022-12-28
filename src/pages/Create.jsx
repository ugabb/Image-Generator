import { useState } from "react";
import "./Create.css";
// const { generateImage } = require('../controllers/openaiController')

const Create = () => {
  const [userPrompt, setUserPrompt] = useState("dog zombie");
  const [size, setSize] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(
      JSON.stringify({
        userPrompt,
        size,
      })
    );
    generateImageRequest(userPrompt, size);
  };

  const generateImageRequest = async (prompt, size) => {
    try {
      const response = await fetch('http://localhost:5000/openai/generateimage', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          size,
        }),
      });

      // if (!response.ok) {
      //   throw new Error("that image could not be generated");
      // }

      const data = await response.json();
      console.log(data);

    } catch (error) {
      console.log(error.message);
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
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <button>Create!</button>
      </form>
    </div>
  );
};

export default Create;
