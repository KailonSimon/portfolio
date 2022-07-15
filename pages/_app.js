import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { useState } from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { darkTheme, lightTheme } from "../theme";

function MyApp({ Component, pageProps }) {
  const [colorScheme, setColorScheme] = useState("dark");
  const toggleColorScheme = () => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={colorScheme === "dark" ? darkTheme : lightTheme}
        withGlobalStyle
        withNormalizeCss
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default MyApp;
