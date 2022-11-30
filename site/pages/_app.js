import { CssVarsProvider } from "@mui/joy";

function MyApp({ Component, pageProps }) {
  return (
    <CssVarsProvider>
      <Component {...pageProps} />
    </CssVarsProvider>
  );
}

export default MyApp;
