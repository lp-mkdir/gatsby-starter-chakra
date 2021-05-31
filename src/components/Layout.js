import React from "react"
import { Header } from "components/blocks/header"
// import { Navigation } from "components/navigation"
import CookieBanner from "./CookieBanner"

const Layout = ({ children }) => (
  <>
    <CookieBanner content="Hallo" buttonText="Accept" />
    {/* <Navigation /> */}
    <Header />
    {children}
  </>
)

export default Layout
