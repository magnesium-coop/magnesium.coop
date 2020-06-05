import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contact" />
      <article>
        <header>
      <h1>Contacto </h1>
        </header>
        <section>

        </section>

        <footer></footer>
      </article>
    </Layout>
  )
}

export default ContactPage

export const pageQuery = graphql`
  query ContactPage {
    site {
      siteMetadata {
        title
      }
    }
   }
`