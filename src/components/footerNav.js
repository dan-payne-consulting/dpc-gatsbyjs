import React from "react"
import { Link } from "gatsby"

class Nav extends React.Component {
    render() {
        return (
            <nav className="footer_nav">
                    {
                        this.props.menuLinks.map(link =>
                            (link.display === "footer" || link.display === "both") ?
                            <Link key={link.name} to={link.link} activeClassName="active">{link.name}</Link>
                                : ""
                        )
                    }

                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/d_s_payne">
                    <span class="icon icon--twitter">
                        <svg aria-hidden="true" viewBox="0 0 16 16"><path fill="#828282" d="M15.969,3.058c-0.586,0.26-1.217,0.436-1.878,0.515c0.675-0.405,1.194-1.045,1.438-1.809c-0.632,0.375-1.332,0.647-2.076,0.793c-0.596-0.636-1.446-1.033-2.387-1.033c-1.806,0-3.27,1.464-3.27,3.27 c0,0.256,0.029,0.506,0.085,0.745C5.163,5.404,2.753,4.102,1.14,2.124C0.859,2.607,0.698,3.168,0.698,3.767 c0,1.134,0.577,2.135,1.455,2.722C1.616,6.472,1.112,6.325,0.671,6.08c0,0.014,0,0.027,0,0.041c0,1.584,1.127,2.906,2.623,3.206 C3.02,9.402,2.731,9.442,2.433,9.442c-0.211,0-0.416-0.021-0.615-0.059c0.416,1.299,1.624,2.245,3.055,2.271 c-1.119,0.877-2.529,1.4-4.061,1.4c-0.264,0-0.524-0.015-0.78-0.046c1.447,0.928,3.166,1.469,5.013,1.469 c6.015,0,9.304-4.983,9.304-9.304c0-0.142-0.003-0.283-0.009-0.423C14.976,4.29,15.531,3.714,15.969,3.058z"/></svg>
                  </span>
                  <span class="username">
                      <span class="sr-only">Twitter:</span>
                      d_s_payne
                  </span>
                </a>
            </nav>
        )
    }
}

export default Nav