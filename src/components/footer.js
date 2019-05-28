import React from "react"
import Nav from "./footerNav.js"
import logo from "../images/DPC-icon-rb.png"
import {Link} from "gatsby"

const Footer = ({ type, menuLinks }) => (
    <footer class={type}>
        <Link to="/"  className="footer_logo show-desktop-inline show-tablet-inline" tabIndex="-1">
            <img width="50px" src={logo} alt="Home" />
        </Link>
        <div className="footer_text">

            <div>
                <Nav menuLinks = {menuLinks} />
            </div>

            <span class="inline">© {new Date().getFullYear()} Dan Payne Consulting, LLC.</span>
            <span class="inline">All rights reserved.</span><br/>


            {
                /*Made with <span style={{color: `red`}}>♥</span> and <a href="https://www.gatsbyjs.org">Gatsby</a>*/
            }
        </div>
        <Link to="/"  className="footer_logo show-phone" tabIndex="-1">
            <img width="50px" src={logo} alt="Home" />
        </Link>
    </footer>
)

export default Footer
