import React from "react"

import Layout from "../layouts/layout"
import SEO from "../components/seo"

const Links = () => (
    <Layout>
        <SEO title="Some helpful links" />
        <h1>Some helpful links...</h1>
        <p>(All links open in a new window)</p>
        <h2>Accessibility Resources</h2>
        <dl>
            <dt>W3C Web Accessibility Initiative</dt>
            <dd><a target="_blank" rel="noopener noreferrer" href="https://www.w3.org/WAI/">www.w3.org/WAI</a></dd>
            <dt>WebAIM</dt>
            <dd><a target="_blank" rel="noopener noreferrer" href="https://www.webaim.org">www.webaim.org</a></dd>
            <dt>WCAG 2 Checklist</dt>
            <dd><a target="_blank" rel="noopener noreferrer" href="https://www.webaim.org/standards/wcag/checklist">www.webaim.org/standards/wcag/checklist</a></dd>
            <dt>Section 508 Checklist</dt>
            <dd><a target="_blank" rel="noopener noreferrer" href="https://www.webaim.org/standards/508/checklist">www.webaim.org/standards/508/checklist</a></dd>
            <dt>International Association of Accessibility Professionals (IAAP)</dt>
            <dd><a target="_blank" rel="noopener noreferrer" href="https://www.accessibilityassociation.org">www.accessibilityassociation.org</a></dd>
            <dt>Deque Systems</dt>
            <dd><a target="_blank" rel="noopener noreferrer" href="https://www.deque.com/">www.deque.com</a></dd>
            <dt>The A11Y Project</dt>
            <dd><a target="_blank" rel="noopener noreferrer" href="https://a11yproject.com/">a11yproject.com/</a></dd>



        </dl>
        <h2>Some orgs and folks you should really check out...</h2>
        <dl>
            <dt>Scott O'Hara</dt>
            <dd><a target="_blank" rel="noopener noreferrer" href="https://www.scottohara.me">www.scottohara.me</a></dd>
            <dt>Sara Soueidan</dt>
            <dd><a target="_blank" rel="noopener noreferrer" href="https://www.sarasoueidan.com">www.sarasoueidan.com</a></dd>
            <dt>Marcy Sutton</dt>
            <dd><a target="_blank" rel="noopener noreferrer" href="https://www.marcysutton.com">www.marcysutton.com</a></dd>
            <dt>Jeffrey Zeldman</dt>
            <dd><a target="_blank" rel="noopener noreferrer" href="https://studio.zeldman.com/">studio.zeldman.com/</a></dd>
            <dt>A List Apart</dt>
            <dd><a target="_blank" rel="noopener noreferrer" href="https://alistapart.com/">alistapart.com</a></dd>
            <dt>Luke Wroblewski</dt>
            <dd><a target="_blank" rel="noopener noreferrer" href="www.lukew.com/">https://www.lukew.com/</a></dd><dt>Kristina Halvorson</dt>
            <dd><a target="_blank" rel="noopener noreferrer" href="https://www.braintraffic.com/">www.braintraffic.com/</a></dd>
            <dt>Jared Spool</dt>
            <dd><a target="_blank" rel="noopener noreferrer" href="https://www.uie.com/">www.uie.com/</a></dd>
        </dl>
    </Layout>
)

export default Links
