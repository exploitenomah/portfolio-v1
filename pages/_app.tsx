import "../styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "../components/Layout"
import { useRouter } from "next/router"
import { useEffect } from "react"
import useRemoveElements from "../hooks/useRemoveElements"

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const removeElements = useRemoveElements()

  useEffect(() => {
    if (router.asPath !== "/") removeElements(".bubble", document.body)
  }, [removeElements, router.asPath])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
