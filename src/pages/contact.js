import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const contacto = data.site.siteMetadata.contacto
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contact" />
      <article>
        <header>
      <h1>Contacto </h1>
        </header>
        <section>
          <p>{contacto.direccion}</p>
          <p>{contacto.telefono}</p>
        <p><a href={contacto.email}>{contacto.email}</a></p>
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
        contacto {
          email
          direccion
          telefono
        }
      }
    }
   }
`