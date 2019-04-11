import React from "react"

import Layout from "../layouts/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const About = () => (
    <Layout>
        <SEO title="My commitment to Accessibility"/>

        <h1>My commitment to Accessibility</h1>

        <p>I want everyone who visits this site to feel welcome and find the experience rewarding. This site recently
            underwent a major redesign and build and is a work-in-progress.</p>

        <p>To make this website a positive place for everyone, I'm using the Web Content Accessibility Guidelines (WCAG)
            2.1. These guidelines explain how to make web content more accessible for people with disabilities and
            user-friendly for everyone.</p>

        <p>The guidelines have three levels of accessibility (A, AA and AAA). I’ve chosen Level AA as the initial target
            for this website.</p>

        <p>I've worked hard on the accessibility of this site to achieve my goal of Level AA accessibility. I monitor it
            regularly to maintain access, but if you do find any problems, please <Link to="/links">get in touch</Link>.
        </p>

        <h2>Learn more</h2>

        <p>For accessible design and development resources, visit my links page: <Link to="/links">/links</Link></p>
    </Layout>
)

export default About
