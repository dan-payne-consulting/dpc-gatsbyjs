import React from "react"

import Layout from "../layouts/layout"
import SEO from "../components/seo"

import cpwaLogo from "../images/IAAP-Certification-Logo-CPWA_fullsize.png"
import shopifyPartners from "../images/shopify-partner.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`accessibility`, `consulting`, `website`]} />
    <section>
      <article>
          <div>
            <h1>Coming soon...</h1>
            <p>Web accessibility is my passion. My goal is to connect with as many businesses as I can to teach them about making their websites more accessible for people with disabilities. </p>
            <p>In the coming weeks I will provide more information on the services I will provide, but in the mean time, please <a href="/contact">get in touch</a> and let's see how I can be of help.</p>
            <p>More to come by mid-July, 2021...</p>
          </div>
      </article>
    </section>
  </Layout>
)

export default IndexPage
