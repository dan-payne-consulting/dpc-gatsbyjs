import React from "react"

import Layout from "../layouts/layout"
import SEO from "../components/seo"

import cpwaLogo from "../images/IAAP-Certification-Logo-CPWA_fullsize.png"
import headshot from "../images/headshot-bw.jpg"

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
              <h1>Web Accessibility Specialist and Consultant</h1>

              <p style={{textAlign: `center`, paddingTop: `20px`}}>
                  <a href="https://www.accessibilityassociation.org/certification">
                      <img src={cpwaLogo} alt="About I A A P Certification"/>
                  </a>
              </p>

              <p><img className="inline-img" src={headshot} alt="" style={{float:`left`,borderRadius:`45px`,margin:`0 30px 10px 0`,boxShadow:`20px 20px 15px -25px #000`,maxWidth:`33%`}}/>After 12 plus years in web development, I've dedicated myself to help make the web a more inclusive and accessible place for everyone. I've recently completed the training and certification required to become a <a target="_blank" rel="noopener noreferrer" href="https://www.accessibilityassociation.org/certification">Certified Professional in Web Accessibility</a> with the <a target="_blank" rel="noopener noreferrer" href="https://www.accessibilityassociation.org">International Association of Accessibility Professionals (IAAP)</a>, a not-for-profit organization whose aim is "to help accessibility professionals develop and advance their careers and to help organizations integrate accessibility into their products and infrastructure."</p>
              <p>I'm passionate about helping people, so it's a natural fit for me to help increase awareness of the issues people with disabilities have when interacting with the web. For too long, the development community has, sometimes accidentally and sometimes intentionally, excluded whole sectors of the population from being able to consume, interact with and contribute to the web. Unfortunately, the latest trends are showing that the situation is getting worse and not better. I believe it's up to veterans like me to spread the word about some simple methods young developers can use to make their sites more accessible and maybe along the way change the minds of some other veterans who don't believe it's worth the time or effort.</p>
          </div>
      </article>
  </section>

  </Layout>
)

export default IndexPage
