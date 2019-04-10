import React from "react"
import { Link } from "gatsby"

class Nav extends React.Component {
    render() {
        return (
            <nav className="navigation_bar">
                <ul>
                    {
                        this.props.menuLinks.map(link =>
                                (link.display === "header" || link.display === "both") ?
                                    <li key={link.name} style={{ 'listStyleType': 'none'}}>
                                        <Link to={link.link} activeClassName="active">{link.name}</Link>
                                    </li>
                                    : ""
                        )
                    }
                </ul>
            </nav>
        )
    }
}

export default Nav