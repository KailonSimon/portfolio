import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { useState } from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { darkTheme, lightTheme } from "../theme";
import ReactGA from "react-ga";
ReactGA.initialize(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);

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
        <NotificationsProvider zIndex={999}>
          <Layout {...pageProps}>
            <Component {...pageProps} />
          </Layout>
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default MyApp;
