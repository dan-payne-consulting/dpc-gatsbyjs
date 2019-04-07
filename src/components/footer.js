import React from "react"
import Nav from "./footerNav.js"
import logo from "../images/DPC-logo-rust.svg"
import {Link} from "gatsby"

const Footer = ({ menuLinks }) => (
    <footer>
        <Link to="/"  className="footer_logo">
            <img width="50px" src={logo} alt="Home" />
        </Link>
        <div className="footer_text">
            © {new Date().getFullYear()} Dan Payne Consulting, LLC. All rights reserved.<br/>

        <Nav menuLinks = {menuLinks} />
        {
            /*Made with <span style={{color: `red`}}>♥</span> and <a href="https://www.gatsbyjs.org">Gatsby</a>*/
        }
        </div>
    </footer>
)

export default Footer
