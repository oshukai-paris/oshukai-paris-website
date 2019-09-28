import React from 'react';
import { FaFacebook, FaInstagram, FaGoogle, FaTwitter} from 'react-icons/fa';
import { StaticQuery, graphql } from 'gatsby';
import './style.scss';

const Footer = () => (
	<StaticQuery
		query={graphql`
			query SocialQuery {
				site {
					siteMetadata {
						google
						facebook
						instagram
						twitter
					}
				}
			}
		`}
		render={data => (
			<footer className="footer center has-background-light">
				<div className="content has-text-centered">
					<p className="is-size-5">
						Retrouvez nous sur:
					</p>
					<article className="media center">
						<span className="icon">
							<a href={data.site.siteMetadata.google}>
								<FaGoogle size="fa-2x"/>
							</a>
						</span>
						&nbsp;
						<span className="icon">
							<a href={data.site.siteMetadata.instagram}>
								<FaInstagram size="fa-2x"/>
							</a>
						</span>
						&nbsp;
						<span className="icon">
							<a href={data.site.siteMetadata.facebook}>
								<FaFacebook size="fa-2x"/>
							</a>
						</span>
						&nbsp;
						<span className="icon">
							<a href={data.site.siteMetadata.twitter}>
								<FaTwitter size="fa-2x"/>
							</a>
						</span>
						&nbsp;
					</article>
					&nbsp;
					<p className="is-size-5">
						Copyright 2019 - Oshukai Paris
					</p>
				</div>
			</footer>
		)}
	/>
);

export default Footer;
