import React from "react"
import PropTypes from "prop-types"
import Nav from "./headerNav.js"
import {Link} from "gatsby"

//import Img from 'gatsby-image'

const Header = ({ siteTitle, menuLinks, logoImage }) => (
  <header
    style={{
      backgroundColor: `#FFF`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 700,
        padding: `0`,
        maxHeight: 48,
      }}
    >
      <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
            display: `inline-block`
          }}
        >
        {/*
        <Img
          fluid={logoImage.childImageSharp.fluid}
          alt="Home"
          style={{width: `295px`, height: `48px`}}
        />*/}
        <img style={{width: `295px`, height: `48px`}} alt="Home" src={logoImage.childImageSharp.fluid.src} />
      </Link>

      <Nav menuLinks = {menuLinks} />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
