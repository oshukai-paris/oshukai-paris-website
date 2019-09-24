import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import Navbar from './navbar';
import './style.scss';

const Header = ({ siteTitle }) => (
	<StaticQuery
      query={graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}`
      }
      render={data => (
		  <div>
			<section className="hero">
				<Navbar />
				<div className="hero-body">
					<div className="container center">
						<article className="media">
							<div className="media-content">
								<div className="content">
									<p className="title is-uppercase is-size-1 has-text-black">
										{data.site.siteMetadata.title}
									</p>
								</div>
							</div>
						</article>
					</div>
				</div>
			</section>
		</div>
      )}
	  />
  );

export default Header;
