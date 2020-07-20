import React from "react"

import Layout from "../layouts/layout"
import SEO from "../components/seo"

import cpwaLogo from "../images/IAAP-Certification-Logo-CPWA_fullsize.png"
import headshot from "../images/headshot-bw.webp"

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
              <h1>Shopify Custom App Development</h1>

              <p><img className="inline-img" src={headshot} alt="" style={{float:`left`,borderRadius:`45px`,margin:`0 30px 10px 0`,boxShadow:`20px 20px 15px -25px #000`,maxWidth:`33%`}}/>I'm a web technologist. My solid background in electronics engineering and web development as well as several leadership and management roles over the years give me a strong understanding of how businesses work and what they need for success on the web.</p>
              <p>I've worked on more than twelve Shopify sites over the past five years doing everything from product data imports to custom app development. Here are some examples of apps I've produced:</p>
              <ul>
                  <li>Shop metafields manager: gives the client the ability to manage custom data structures that appear throughout their site.</li>
                  <li>Subscription manager: customers sign-up to re-order products at selected intervals with payments automatically processed.</li>
                  <li>Custom Salesforce integration: The client's Salesforce account had been highly customized so they needed a custom adapter to map Shopify data to Salesforce fields.</li>
                  <li>Enhanced promotions: Customer purchase history unlocked tiered discounts.</li>
                  <li>Custom integrations with various third-party services such as campaign management, fulfillment and inventory, taxes and shipping, and more...</li>
              </ul>

              <p>I'm also a dedicated advocate for making the web a more inclusive and accessible place for everyone. I'm a <a target="_blank" rel="noopener noreferrer" href="https://www.accessibilityassociation.org/certification">Certified Professional in Web Accessibility</a> through the <a target="_blank" rel="noopener noreferrer" href="https://www.accessibilityassociation.org">International Association of Accessibility Professionals (IAAP)</a>, a not-for-profit organization whose aim is "to help accessibility professionals develop and advance their careers and to help organizations integrate accessibility into their products and infrastructure."</p>
              <p>Bringing these two things together: a wealth of experience and a strong desire to help people, my consultancy is all about making the web a better place for everyone AND providing the strategies, vision, and expertise my clients need to successfully present their brand to the world.</p>
              <p>If you're looking for expert advice on web design, development, accessibility, auditing, compliance, remediation, or anything else web-related, please <a href="/contact">get in touch</a> and I'd be happy to help.</p>


              <p style={{textAlign: `center`, paddingTop: `20px`}}>
                  <a href="https://www.accessibilityassociation.org/certification">
                      <img src={cpwaLogo} alt="About I A A P Certification"/>
                  </a>
              </p>
          </div>
      </article>
  </section>

  </Layout>
)

export default IndexPage
