import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import { useDropzone } from "react-dropzone";
import s from "../../styles/ImageLoader.module.css";

const ImagePicker = ({ onDrop }) => {
  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop: onDrop,
    noClick: true,
    noKeyboard: true,
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
  });

  return (
    <Paper
      sx={{
        backgroundColor: "lightgrey",
      }}
      {...getRootProps()}
      className={s["image-loader"]}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <Typography>Deje caer la foto aqui ...</Typography>
      ) : (
        <>
          <Typography>Arrastre y deje caer su foto aqui</Typography>
          <Typography
            style={{
              marginBottom: 4,
            }}
          >
            o
          </Typography>
          <Button
            style={{
              marginBottom: 8,
            }}
            variant="contained"
            onClick={open}
          >
            Seleccione foto
          </Button>
          <Typography variant="caption">
            (Only *.jpeg and *.png images will be accepted)
          </Typography>
        </>
      )}
    </Paper>
  );
};

export default ImagePicker;
