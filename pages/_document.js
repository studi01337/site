import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>French based Tech Studio</title>
        <meta name="description" content="Elevate your digital game !" />

        <meta property="og:url" content="https://studio1337.tech" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="French based Tech Studio" />
        <meta property="og:description" content="Elevate your digital game !" />

        <meta
          property="og:image"
          content="https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v3/studio1337.tech/French%20based%20Tech%20Studio/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fdocuments%2F6608be97-871e-450b-bb8c-51cc31e34981.jpg%3Ftoken%3DPfEsNF_4-Ug4YdD0tQu6EJ8P25L75cnbIF2ACreVl84%26height%3D800%26width%3D1200%26expires%3D33241585596/og.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="studio1337.tech" />
        <meta property="twitter:url" content="https://studio1337.tech" />
        <meta name="twitter:title" content="French based Tech Studio" />
        <meta
          name="twitter:description"
          content="Elevate your digital game !"
        />
        <meta
          name="twitter:image"
          content="https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v3/studio1337.tech/French%20based%20Tech%20Studio/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fdocuments%2F6608be97-871e-450b-bb8c-51cc31e34981.jpg%3Ftoken%3DPfEsNF_4-Ug4YdD0tQu6EJ8P25L75cnbIF2ACreVl84%26height%3D800%26width%3D1200%26expires%3D33241585596/og.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
