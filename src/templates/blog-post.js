import React from 'react';
import Layout from '../layouts/layout';
import SEO from "../components/seo"
import Img from 'gatsby-image';
import { graphql } from 'gatsby'
import PrevNext from '../components/prevnext';

function BlogPost(props) {

    const { title, image, date } = props.data.markdownRemark.frontmatter;
    const { prev, next } = props.pageContext;

    return (
        <Layout>
            <SEO title={title} />
            <div>
                <h1>{title}</h1>
                <p>{date}</p>
                {image && <Img fluid={image.childImageSharp.fluid} />}

                <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />

                <PrevNext prev={prev && prev.node} next={next && next.node} />
            </div>
        </Layout>
    )
}


export default BlogPost

export const query = graphql`

 query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
       html
       excerpt
       frontmatter {
        title
        date(formatString: "MMMM Do YYYY")
        image {
          childImageSharp {
            resize(width: 1000, height: 420) {
              src
            }
            fluid(maxWidth: 786) {
              ...GatsbyImageSharpFluid
            }
          }
        }
       }
   }
}
`