import React, { useState } from "react";
import axios from "axios";
import DropzoneComponent from "../components/DropzoneComponent";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const [file, setFile] = useState(null);
  const [question, setQuestion] = useState("");
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const handleFileDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(
        "http://localhost:8000/upload-file/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setData(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleQuestionSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:8000/process-question/", {
        question: question,
        context: data, // Pass the processed data from the file
      });
      localStorage.setItem("response", res.data.response); // Store response in local storage
      navigate("/response"); // Navigate to the response page
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="home">
      <h1>Welcome to ARVIS</h1>
      <p>Upload business data, ask questions, and get visual insights!</p>

      {/* File Dropzone */}
      <DropzoneComponent onDrop={handleFileDrop} />
      {file && <p className="file-info">File uploaded: {file.name}</p>}
      <button className="btn" onClick={handleFileUpload} disabled={!file}>
        Upload File
      </button>

      {/* Question Input */}
      <input
        className="input"
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a business-related question"
      />
      <button
        className="btn"
        onClick={handleQuestionSubmit}
        disabled={!question}
      >
        Submit Question
      </button>
    </div>
  );
}

export default Home;
