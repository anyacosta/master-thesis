import { FC } from "react";
import NextHead from "next/head";

const Head: FC = () => {
  return (
    <NextHead>
      <title>Tesis</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
    </NextHead>
  );
};

export default Head;
