import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { theme } from "../theme";
import { GoogleAnalytics, usePageViews } from "nextjs-google-analytics";
import LoadingScreen from "../sections/LoadingScreen";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  usePageViews();
  const [loading, setLoading] = useState(true);
  const [colorScheme, setColorScheme] = useState("dark");
  const toggleColorScheme = () => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [loading]);

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
      {loading ? (
        <LoadingScreen />
      ) : (
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
      )}
      <div className="background" />
    </>
  );
}

export default MyApp;
