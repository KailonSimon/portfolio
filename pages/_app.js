import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { useState } from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { theme } from "../theme";
import { GoogleAnalytics, usePageViews } from "nextjs-google-analytics";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  usePageViews();
  const [colorScheme, setColorScheme] = useState("light");
  const toggleColorScheme = () => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <GoogleAnalytics
        gaMeasurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
      />
      <Head>
        <title>Kailon Simon | Developer</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
      </Head>

      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider theme={theme} withGlobalStyle withNormalizeCss>
          <NotificationsProvider zIndex={999}>
            <Layout {...pageProps}>
              <Component {...pageProps} />
            </Layout>
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

export default MyApp;
