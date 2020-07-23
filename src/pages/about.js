import React from "react"

import Layout from "../layouts/layout"
import SEO from "../components/seo"

import headshot from "../images/headshot-bw.webp"

const About = () => (
    <Layout>
        <SEO title="About Dan Payne" />
        <h1>About Dan Payne</h1>
        <p><img className="inline-img" src={headshot} alt="" style={{float:`right`,borderRadius:`45px`,margin:`0 0 10px 30px`,boxShadow:`20px 20px 15px -25px #000`,maxWidth:`33%`}}/>After several years on active duty in the U.S. Air Force as a satellite and microwave technician, I found myself working closely with a number of engineering officers. I was insipired to become an engineer myself but knew it would take forever to finish my schooling with the pace of deployments. I decided to transfer to the California Air National Guard to continue my service while pursuing my degree full-time.</p>
        <p>I completed my Electronics Engineering Technology degree at DeVry University and after working for Boeing Satellite Systems and for REMEC/Cobham designing flight/space hardware, I became restless as I realized I preferred working with code.</p>
        <p>I began self-schooling on web development concepts and soon afterward started working with Spiegel Design Group (SDG) as the sole backend developer. Over the years we grew the company, working with clients such as The Drybar, IT Cosmetics, ReserveBar, simplehuman, Korn Ferry, and many others. As the team grew, my role became more managerial as I ran the day-to-day operations of the company, but I continued to contribute as a developer as needed.</p>
        <p>When I left SDG I realized that my years of experience as a developer would give me a solid foundation in the rapidly growing web accessibility field. I trained for and passed both the IAAP WAS and CPACC certification exams and continue to develop and grow my skills in evaluating website accessibility.</p>
        <p>Now, I leverage all my training and experience to provide consulting services. I help companies seeking to build inclusive, accessible websites find the right strategies and resources to establish and maintain their web presence. I also help companies evaluate their existing site for issues relating to accessibility and help them plan for their remediation.</p>
        <ul>
            <li>Senior Master Sergeant, Retired, California Air National Guard</li>
            <li>Bachelor of Science, Electronics Engineering Technology, DeVry University</li>
            <li>Associate of Applied Science, Community College of the Air Force</li>
            <li>Certified Shopify App Developer</li>
            <li>Certified Magento Developer</li>
            <li>Certified Professional in Web Accessibility</li>
        </ul>
    </Layout>
)

export default About
