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
    >
      <article className="content-text">
          <div>
              <h1>Web Accessibility Consulting</h1>

              <p style={{textAlign: `center`, paddingTop: `20px`}}>
                  <a href="https://www.accessibilityassociation.org/certification">
                      <img src={cpwaLogo} alt="About I A A P Certification"/>
                  </a>
              </p>

              <p><img className="inline-img" src={headshot} alt="" style={{float:`left`,borderRadius:`45px`,margin:`0 30px 10px 0`,boxShadow:`20px 20px 15px -25px #000`,maxWidth:`33%`}}/>I'm a web technologist. My solid background in electronics engineering and backend web development as well as several leadership and management roles over the years give me a strong understanding of how businesses work and what they need for success on the web.</p>
              <p>I'm also a dedicated advocate for making the web a more inclusive and accessible place for everyone. I'm a <a target="_blank" rel="noopener noreferrer" href="https://www.accessibilityassociation.org/certification">Certified Professional in Web Accessibility</a> through the <a target="_blank" rel="noopener noreferrer" href="https://www.accessibilityassociation.org">International Association of Accessibility Professionals (IAAP)</a>, a not-for-profit organization whose aim is "to help accessibility professionals develop and advance their careers and to help organizations integrate accessibility into their products and infrastructure."</p>
              <p>Bringing these two things together: a wealth of experience and a strong desire to help people, my consultancy is all about making the web an equitable place for everyone AND providing the strategies, vision, and expertise my clients' need to successfully post their brand to the world.</p>
              <p>If you're looking for expert advice on web design, development, accessibility, auditing, compliance, remediation, or anything else web-related, please <a href="/contact">get in touch</a> and I'd be happy to help.</p>
          </div>
      </article>
  </section>

  </Layout>
)

export default IndexPage
