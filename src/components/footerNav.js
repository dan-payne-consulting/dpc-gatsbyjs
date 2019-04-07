import React from "react"
import { Link } from "gatsby"

class Nav extends React.Component {
    render() {
        return (
            <nav className="footer_nav">
                    {
                        this.props.menuLinks.map(link =>
                            <Link key={link.name} to={link.link} activeClassName="active">{link.name}</Link>
                        )
                    }
            </nav>
        )
    }
}

export default Nav