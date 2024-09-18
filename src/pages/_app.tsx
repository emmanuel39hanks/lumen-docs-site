import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Lumen Docs - AI-Powered API Documentation Generator</title>
        <meta name="description" content="Generate, manage, and deploy beautiful API documentation from OpenAPI specifications using AI magic with Lumen Docs." />
        <meta name="keywords" content="API documentation, OpenAPI, AI, documentation generator, Lumen Docs" />
        <meta name="author" content="Emmanuel Haankwenda" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://lumen-docs.vercel.app" />
        <meta property="og:title" content="Lumen Docs - AI-Powered API Documentation Generator" />
        <meta property="og:description" content="Generate, manage, and deploy beautiful API documentation from OpenAPI specifications using AI magic with Lumen Docs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lumen-docs.vercel.app" />
        <meta property="og:image" content="https://lumen-docs.vercel.app/preview.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@emmanuel_haanks" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
