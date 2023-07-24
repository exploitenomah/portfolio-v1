import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html
      lang="en"
      className="scroll-smooth selection:bg-primary-default selection:text-white"
    >
      <Head />
      <body className="bg-primary-default">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
