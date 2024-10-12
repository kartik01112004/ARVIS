import React from "react";
import { useDropzone } from "react-dropzone";
import "./DropzoneComponent.css";

const DropzoneComponent = ({ onDrop }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "text/csv": [".csv"],
      "application/pdf": [".pdf"],
      "text/plain": [".txt"],
    },
  });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="dropzone-text">Drop the file here...</p>
      ) : (
        <p className="dropzone-text">
          Drag & drop your file here, or click to select
        </p>
      )}
    </div>
  );
};

export default DropzoneComponent;
