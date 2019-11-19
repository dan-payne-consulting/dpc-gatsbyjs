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
                const readMoreLink = "Continue reading "+node.frontmatter.title
                return (
                    <article aria-labelledby={id} className="post-list">
                        <header>
                            <h2 className="header2">
                                <Link to={node.fields.slug} key={i} className="link" id={id}>
                                    {node.frontmatter.title}
                                </Link>
                            </h2>
                            <p class="metadata">
                                <span class="sr-only">Posted on </span>
                                {node.frontmatter.displayDate}
                            </p>
                        </header>
                        <p>{node.frontmatter.summary}
                          <div className="readmore-block">
                            <Link to={node.fields.slug} key={i} className="readmore" id={id}>
                              <span aria-label={readMoreLink}>Read More</span>
                            </Link>
                          </div>
                        </p>
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