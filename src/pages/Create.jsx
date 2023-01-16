import { useState } from "react";
import "./Create.css";
import api from "../api";

const Create = () => {
  const [prompt, setPrompt] = useState("");
  const [size, setSize] = useState("");
  const [image, setImage] = useState();
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading((prev) => (prev = true));
    setImage("");
    setPrompt("");
    setSize("");

    try {
      const response = await api.post("/generateimage", {
        prompt,
        size,
      });

      console.log(response);
      setImage(response.data.data);
      setMessage(response.data.message);
    } catch (error) {
      console.log(error);
    }

    setLoading((prev) => (prev = false));
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>Write here what you want to Create!</label>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Write here"
        />
        <select onChange={(e) => setSize(e.target.value)}>
          <option value="">--SELECT</option>
          <option value="256x256">Small</option>
          <option value="512x512">Medium</option>
          <option value="1024x1024">Large</option>
        </select>
        <button>Create!</button>
      </form>
      {loading && <div className="loader"></div>}
      {image && (
        <div className="image-generated">
          <h2>{message}</h2>
          <img src={image} alt="" />
        </div>
      )}
    </div>
  );
};

export default Create;
