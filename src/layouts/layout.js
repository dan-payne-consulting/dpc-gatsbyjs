import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Helmet from 'react-helmet'

import Header from "../components/header"
import Footer from "../components/footer"
import "./layout.css"
import "../components/style.css"

import icon32 from '../images/DPC-icon.png'

import DesktopBreakpoint from "../components/responsive_utilities/desktop_breakpoint"
import TabletBreakpoint from "../components/responsive_utilities/tablet_breakpoint"
import PhoneBreakpoint from "../components/responsive_utilities/phone_breakpoint"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
              display
            }
          }
        }
        logoImage: file(relativePath: {eq: "DPC-web-logo3.png"}) {
          childImageSharp {
            fluid(maxWidth: 295, maxHeight: 48) {
              base64
              tracedSVG
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
              originalImg
              originalName
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <div id="skip"><a href="#main">Skip to Main Content</a></div>

        <DesktopBreakpoint>
            <Header
              menuLinks={data.site.siteMetadata.menuLinks}
              siteTitle={data.site.siteMetadata.title}
              logoImage={data.logoImage}
              type="desktop"
              className="top"
            />
        </DesktopBreakpoint>
        <TabletBreakpoint>
            <Header
              menuLinks={data.site.siteMetadata.menuLinks}
              siteTitle={data.site.siteMetadata.title}
              logoImage={data.logoImage}
              type="tablet"
              className="top"
            />
        </TabletBreakpoint>
        <PhoneBreakpoint>
            <Header
              menuLinks={data.site.siteMetadata.menuLinks}
              siteTitle={data.site.siteMetadata.title}
              logoImage={data.logoImage}
              type="phone"
              className="top"
            />
        </PhoneBreakpoint>

        <DesktopBreakpoint>
            <div id="maincontent" tabIndex="-1" class="desktop" >
                <main id="main" class="desktop">{children}</main>
                <Footer type="desktop" menuLinks={data.site.siteMetadata.menuLinks} />
            </div>
        </DesktopBreakpoint>
        <TabletBreakpoint>
            <div id="maincontent" tabIndex="-1" class="tablet" >
                <main id="main" class="tablet">{children}</main>
                <Footer type="tablet" menuLinks={data.site.siteMetadata.menuLinks} />
            </div>
        </TabletBreakpoint>
        <PhoneBreakpoint>
            <div id="maincontent" tabIndex="-1" class="phone" >
                <main id="main" class="phone">{children}</main>
                <Footer type="phone" menuLinks={data.site.siteMetadata.menuLinks} />
            </div>
        </PhoneBreakpoint>

        <Helmet
            //title="Dan Payne"
            //meta={[
              //{ name: 'description', content: '{data.site.siteMetadata.description}' },
              //{ name: 'keywords', content: 'webdev, photography, gatsbyjs, reactjs, frontend, graphql, design, photo, photos' },
            //]}
            link={[
              { rel: 'shortcut icon', type: 'image/png', href: `${icon32}` }
          ]}
        >
        <link rel="stylesheet" href="https://use.typekit.net/sfo6sct.css"/>
        </Helmet>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
