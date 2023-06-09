import * as React from "react"
import Seo from "../components/seo"
import Why from "../components/HomePack/Why"
import Principles from "../components/HomePack/Principles"
import ServicesSection from "../components/HomePack/ServicesSection"
import AboutUs from "../components/AboutUs"
import Partnership from "../components/Partnership"
import ContactCmp from "../components/NewContact/ContactCmp"


function IndexPage() {
  return (
    <div>
      <Why />
      <Principles />
      <AboutUs />
      <ServicesSection />
      <ContactCmp />
      <Partnership />
    </div>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
