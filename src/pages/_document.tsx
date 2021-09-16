import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { getCavilhaCssString } from "@cavilha/theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            id="cavilha-css"
            dangerouslySetInnerHTML={{ __html: getCavilhaCssString() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
