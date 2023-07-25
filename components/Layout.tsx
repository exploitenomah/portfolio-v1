import Head from "next/head"
import { ReactNode, useEffect, useRef, useState } from "react"
import BreadCrumbs from "./Breadcrumbs"
import Footer from "./Footer"
import Header from "./Header"

export default function Layout({
  children,
}: {
  children: ReactNode | ReactNode[]
}) {
  return (
    <>
      <>
        <div className="">
          <Head>
            <title>
              <>Exploit Enomah | Full-Stack Developer</>
            </title>
            <meta name="description" content="Exploit Enomah's Portfolio" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="relative z-[12] min-h-screen flex flex-col">
            <Header />
            {/* <BreadCrumbs /> */}
            {children}
            <div className="mt-auto">
              <Footer />
            </div>
          </div>
        </div>
      </>
    </>
  )
}
