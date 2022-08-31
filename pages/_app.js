import { CacheProvider } from "@emotion/react";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import Head from "../components/Head";

import { useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../constants/theme";
import createEmotionCache from "../utils/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <Head />
      <CssBaseline />
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </StyledEngineProvider>
    </CacheProvider>
  );
}

export default MyApp;
