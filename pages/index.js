import { useState } from "react";
import Header from "../components/Header/Header";
import ImageLoader from "../components/ImageLoader/ImageLoader";
import Predictions from "../components/Predictions/Predictions";

import s from "../styles/Home.module.css";

export default function Home() {
  const [predictions, setPredictions] = useState([]);

  const handleImageAnalyzed = (predictions) => {
    setPredictions(predictions);
  };

  return (
    <div>
      <Header />
      <main className={s["container"]}>
        <ImageLoader onImageAnalyzed={handleImageAnalyzed} />
        <Predictions predictions={predictions} />
      </main>
    </div>
  );
}
