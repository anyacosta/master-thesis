import React, { useCallback, useState, useEffect, useMemo } from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { loadImageClassification } from "@tensorflow/tfjs-automl";
import { useDropzone } from "react-dropzone";
import ImagePicker from "../ImagePicker/ImagePicker";
import CircularProgress from "@mui/material/CircularProgress";

import s from "../../styles/ImageLoader.module.css";

import "@tensorflow/tfjs";

const ImageLoader = ({ onImageAnalyzed }) => {
  const [files, setFiles] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);

  const { open } = useDropzone({
    onDrop: onDrop,
    noClick: true,
    noKeyboard: true,
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
  });

  const file = useMemo(() => {
    if (files.length === 0) {
      return null;
    }

    return files[0];
  }, [files]);

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  const handleAnalyze = useCallback(async () => {
    setIsProcessing(true);
    try {
      const model = await loadImageClassification("./models/model.json");
      const image = document.getElementById("image-to-analyze-id");

      const predictions = await model.classify(image);

      onImageAnalyzed(predictions);
    } catch (error) {
      console.log(error);
    } finally {
      setIsProcessing(false);
    }
  }, []);

  const handleChangeImage = () => {
    onImageAnalyzed([]);
    open();
  };

  return files.length > 0 ? (
    <div>
      <Paper className={s["image-displayer"]}>
        <img
          src={file?.preview}
          id="image-to-analyze-id"
          className={s["image-loaded"]}
          alt=""
          onLoad={() => {
            URL.revokeObjectURL(file?.preview);
          }}
        />
      </Paper>
      <div className={s["buttons-container"]}>
        <Button
          style={{
            marginRight: 8,
          }}
          onClick={handleChangeImage}
          variant="outlined"
        >
          Cambiar
        </Button>
        <Button
          variant="contained"
          disabled={isProcessing}
          sx={{
            minWidth: 110,
          }}
          onClick={handleAnalyze}
        >
          {isProcessing ? (
            <CircularProgress
              sx={{
                color: "white",
              }}
              size={24}
            />
          ) : (
            "Analizar"
          )}
        </Button>
      </div>
    </div>
  ) : (
    <ImagePicker onDrop={onDrop} />
  );
};

export default ImageLoader;
