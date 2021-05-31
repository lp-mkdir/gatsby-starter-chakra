import React from "react"
import { Header } from "components/blocks/header"
import CookieBanner from "./CookieBanner"

const Layout = ({ children }) => (
  <>
    <CookieBanner content="Hallo" buttonText="Accept" />
    <Header />
    {children}
  </>
)

export default Layout
