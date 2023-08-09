import { CssBaseline, CssVarsProvider } from "@mui/joy";

function MyApp({ Component, pageProps }) {
  return (
    <CssVarsProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </CssVarsProvider>
  );
}

export default MyApp;
