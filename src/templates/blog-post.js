import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import OneColumnLayout from "../components/layout"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <OneColumnLayout>
      <div className="section">
        <article className="media">
          <figure className="media-left">
            <p className="image is-64x64">
              <Img fluid={post.frontmatter.logo.childImageSharp.fluid} />
            </p>
          </figure>
            <div className="media-content">
              <div className="content">
                <p className="title">{post.frontmatter.title}{" "}</p>
                <p className="subtitle is-size-6 is-italic">Le {post.frontmatter.date}</p>

                <div dangerouslySetInnerHTML={{ __html: post.html }} />
              </div>
            </div>
        </article>
      </div>
    </OneColumnLayout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD/MM/YY")
        logo {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
