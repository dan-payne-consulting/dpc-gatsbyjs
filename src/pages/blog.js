import React from 'react'
import { Link, graphql } from 'gatsby'
import '../layouts/post.css';
import Layout from '../layouts/layout'
import SEO from "../components/seo"

const IndexPage = (props) => {
    const postList = props.data.allMarkdownRemark;
    return (
        <Layout>
            <SEO title="Blog" />
            {postList.edges.map(({ node }, i) => (
                <Link to={node.fields.slug} key={i} className="link" >
                    <div className="post-list">
                        <h2>{node.frontmatter.title}</h2>
                        <span>{node.frontmatter.date}</span>
                        <p>{node.excerpt}</p>
                    </div>
                </Link>
            ))}
        </Layout>
    )
}

export default IndexPage;

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields{
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
          }
        }
      }
    }
  }
`