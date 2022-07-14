import { MantineProvider } from "@mantine/core";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider
      theme={{ colorScheme: "dark", fontFamily: "Poppins" }}
      withGlobalStyle
      withNormalizeCss
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  );
}

export default MyApp;
