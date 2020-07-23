import React from "react"

import Layout from "../layouts/layout"
import SEO from "../components/seo"

import cpwaLogo from "../images/IAAP-Certification-Logo-CPWA_fullsize.png"
import shopifyPartners from "../images/shopify-partner.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`accessibility`, `consulting`, `website`]} />

    <section
    /*style={{
    display: `grid`,
    gridTemplateColumns: `1fr 1fr`,
    gridTemplateRows: `1fr`,
    gridColumnGap: `10px`,
    gridRowGap: `0px`
    }}*/
    /*

    frank and eileen
    california baby
    city mattress
    schneiderman's furniture
    save khaki united
    vimmia
    The Chivery
    William Murray Golf
    360 cashmere
    stampd
    bailey44.com
    john elliott

    recurly

    */
    >
      <article className="content-text">
          <div>
              <h1>Certified Shopify App Developer</h1>

              <p><img className="img" src={shopifyPartners} alt="" style={{float:`left`, margin:`0 20px 0 0`,maxWidth:`40%`}}/>I've been a web developer since 2006, working with Shopify stores since 2015. As a Certified Shopify App Developer I create custom applications that integrate with Shopify according to my client's needs. I've worked on more than twelve Shopify sites over the years doing everything from product data imports to custom app development. Here are some examples of apps I've produced:</p>
              <ul>
                  <li>Shop metafields manager: gives the client the ability to manage custom data structures that appear throughout their site.</li>
                  <li>Subscription manager: customers sign-up to re-order products at selected intervals with payments automatically processed.</li>
                  <li>Custom Salesforce integration: The client's Salesforce account had been highly customized so they needed a custom adapter to map Shopify data to Salesforce fields.</li>
                  <li>Enhanced promotions: Customer purchase history unlocked tiered discounts.</li>
                  <li>Custom integrations with various third-party services such as campaign management, fulfillment and inventory, taxes and shipping, and more...</li>
              </ul>

              <p><a style={{float:`right`,paddingTop:`20px`}} href="https://www.accessibilityassociation.org/certification">
                      <img src={cpwaLogo} alt="About I A A P Certification"/>
                  </a>I'm also a dedicated advocate for making the web a more inclusive and accessible place for everyone. I'm a <a target="_blank" rel="noopener noreferrer" href="https://www.accessibilityassociation.org/certification">Certified Professional in Web Accessibility</a> through the <a target="_blank" rel="noopener noreferrer" href="https://www.accessibilityassociation.org">International Association of Accessibility Professionals (IAAP)</a>, a not-for-profit organization whose aim is "to help accessibility professionals develop and advance their careers and to help organizations integrate accessibility into their products and infrastructure."</p>
              <p>Bringing these two things together: a wealth of experience and a strong desire to help people, my consultancy is all about making the web a better place for everyone AND providing the strategies, vision, and expertise my clients need to successfully present their brand to the world.</p>

              <p>Please <a href="/contact">get in touch</a> and let's see how I can be of help.</p>

          </div>
      </article>
  </section>

  </Layout>
)

export default IndexPage
