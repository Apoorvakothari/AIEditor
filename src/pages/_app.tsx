import { NextPage } from "next"
import type { AppProps } from "next/app"

import Providers from "@/providers"

import Layout from "@/components/layout"

import "@/styles/globals.css"

const App: NextPage<AppProps> = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <Providers session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  )
}

export default App
