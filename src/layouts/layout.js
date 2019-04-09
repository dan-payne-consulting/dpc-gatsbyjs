import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Helmet from 'react-helmet'

import Header from "../components/header"
import Footer from "../components/footer"
import "./layout.css"
import "../components/style.css"

import icon32 from '../images/DPC-icon.png'


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
        logoImage: file(relativePath: {eq: "DPC-web-logo2.png"}) {
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
        <div id="skip"><a href="#maincontent">Skip to Main Content</a></div>
        <Header
          menuLinks={data.site.siteMetadata.menuLinks}
          siteTitle={data.site.siteMetadata.title}
          logoImage={data.logoImage}
        />
        <div
          id="maincontent"
          style={{
            margin: `0 auto`,
            maxWidth: 700,
            paddingTop: 25,
          }}
          tabIndex="-1"
        >
          <main>{children}</main>
          <Footer
            menuLinks={data.site.siteMetadata.menuLinks}
          />
        </div>

        <Helmet
            //title="Dan Payne"
            //meta={[
              //{ name: 'description', content: '{data.site.siteMetadata.description}' },
              //{ name: 'keywords', content: 'webdev, photography, gatsbyjs, reactjs, frontend, graphql, design, photo, photos' },
            //]}
            link={[
              { rel: 'shortcut icon', type: 'image/png', href: `${icon32}` }
          ]}
        />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
