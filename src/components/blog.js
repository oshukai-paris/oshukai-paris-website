import React from 'react';
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import './style.scss';

const Blog = ( ) => (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            totalCount
            edges {
              node {
                id
                html
                frontmatter {
                  title
                  date(formatString: "DD/MM/YYYY")
                  summary
                  logo {
                    childImageSharp {
                      fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
                fields {
                  slug
                }
                excerpt
              }
            }
          }
        }`
      }
      render={data => (
        <div>
          <section className="section">

            <div className="container">

              <p className="title">Actualités</p>

              {data.allMarkdownRemark.edges.map(({ node }) => (
                <div className="box" key={node.id}>
                    <article className="media">
                      <figure className="media-left">
                        <p className="image is-64x64">
                          <Img fluid={node.frontmatter.logo.childImageSharp.fluid} />
                        </p>
                      </figure>
                        <div className="media-content">
                          <div className="content">
                          <Link to={node.fields.slug}>
                            <strong>{node.frontmatter.title}{" "}</strong><br/>
                          </Link>
                            <small>Le {node.frontmatter.date}</small>
                            <p>{node.frontmatter.summary}</p>
                          </div>
                        </div>
                    </article>
                </div>
              ))}

            </div>

          </section>
        </div>
      )}
    />
);

export default Blog;
