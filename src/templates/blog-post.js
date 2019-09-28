import React from "react"
import { graphql } from "gatsby"
import OneColumnLayout from "../components/layout"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <OneColumnLayout>
      <div className="section">
        <div className="container content">
          <p class="title">{post.frontmatter.title}</p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
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
      }
    }
  }
`
