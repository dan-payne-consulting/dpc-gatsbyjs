import React from 'react'
import { Link, graphql } from 'gatsby'
import '../styles/post.css';
import Layout from '../layouts/layout'
import SEO from "../components/seo"

const IndexPage = (props) => {
    const postList = props.data.allMarkdownRemark;
    return (
        <Layout>
            <SEO title="Blog" />
            <h1>Blog</h1>
            <section>
            {postList.edges.map(({ node }, i) => {
                const id = "article_"+i
                return (
                    <article aria-labelledby={id} className="post-list">
                        <header>
                            <h2>
                                <Link to={node.fields.slug} key={i} className="link" id={id}>
                                    {node.frontmatter.title}
                                </Link>
                            </h2>
                            <p class="metadata">
                                <span class="sr-only">Posted on</span>
                                <time datetime={node.frontmatter.pubDate}>{node.frontmatter.displayDate}</time>
                            </p>
                        </header>
                        <p>{node.frontmatter.summary}</p>
                    </article>
                )
            })}
            </section>
        </Layout>
    )
}

export default IndexPage;

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___pubDate] }) {
      edges {
        node {
          fields{
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            displayDate(formatString: "dddd, MMMM Do YYYY")
            pubDate
            title
            summary
          }
        }
      }
    }
  }
`