import React from "react"

import Layout from "../layouts/layout"
import SEO from "../components/seo"

import wasLogo from "../images/IAAP-Certification-Logo-WAS-full-size.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`accessibility`, `consulting`, `website`]} />

    <section id="maincontent" className="content">
      <article className="content-text">
        <h1>Web Accessibility Specialist and Consultant</h1>

        <p style={{textAlign: `center`, paddingTop: `20px`}}>
          <a href="https://www.accessibilityassociation.org/wascertification">
            <img src={wasLogo} alt="About WAS Certification"/>
          </a>
        </p>

        <p>With over 12 years of experience as a web developer, as a member of the <a target="_blank" rel="noopener noreferrer" href="https://www.accessibilityassociation.org">International Association of Accessibility Professionals (IAAP)</a>, and as an <a target="_blank" rel="noopener noreferrer" href="https://www.accessibilityassociation.org/wascertification">IAAP certified Web Accessibility Specialist</a> I can help evaluate your website and identify, prioritize, and recommend remediation for accessibility issues.</p>

        <p>According to <a target="_blank" rel="noopener noreferrer" href="https://webaim.org/projects/million/">WebAIM.org</a>, as of February 2019, 97.8% of the top million website home pages have automatically detectable accessibility errors, making them difficult or impossible for some users to interact with. They go on to say that "only around 25% of possible conformance failures can be automatically detectable." That means you need an experienced web accessibility professional to detect the nearly 75% of issues that automated tools can't catch.</p>

        <p>According to <a target="_blank" rel="noopener noreferrer" href="https://blog.usablenet.com/a-recap-of-2018-ada-web-accessibility-lawsuits-and-primer-on-how-to-avoid-them?utm_campaign=AQA%20Free%20Test&utm_content=87096829&utm_medium=social&utm_source=facebook&hss_channel=fbp-111272465575315">Usablenet.com</a>, web accessibility lawsuits in the United States jumped by 181% in 2018 from the previous year. We've all heard the stories of more and more high-profile businesses being sued by users who are unable to use their websites. In some cases these lawsuits originated from actual, everyday users who simply couldn't accomplish something, but many are thought to have been originated by predatory lawyers seeing an easy opportunity to make money by exploiting the fact that so many sites have these issues.</p>

        <p>And yet, there is no magic pill that will fix all errors. Even with the best advice and technology, it's probable that not all errors can (or should) be fixed. That shouldn't stop us from still doing whatever we can to make our sites as widely available to as many users as we can. It also means that the decision on what to fix and how to fix it is a collaborative effort that can only start with a thorough site evaluation.</p>
      </article>
    </section>

  </Layout>
)

export default IndexPage
