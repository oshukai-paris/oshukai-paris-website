import React from 'react';
import { Link } from "gatsby"
import oshukaiLogo from '../images/oshukai-karate-kobudo.png';

import './style.scss';

const Navbar = () => (
	<div className="hero-head is-hidden-mobile">
		<nav className="navbar">
			<div className="container">
				<div className="navbar-brand">
					<span className="navbar-item">
						<Link to={`/`}>
							<img src={oshukaiLogo} alt="Logo" />
						</Link>
					</span>

					<span className="navbar-burger burger" data-target="navbarMenuHeroA">
						<span></span>
						<span></span>
						<span></span>
					</span>
				</div>

				<div id="navbarMenuHeroA" className="navbar-menu">
					<div className="navbar-end has-text-black">
						<span className="navbar-item">
							<Link to={`/`}>Accueil</Link>
						</span>
						<span className="navbar-item">
							<Link to={`/about/`}>A Propos</Link>
						</span>
						<span className="navbar-item">
							<Link to={`/blog/`}>Actualités</Link>
						</span>
						{/* <span className="navbar-item">
							<Link to={`/contact/`}>Contact</Link>
						</span> */}
					</div>
				</div>
			</div>
		</nav>
	</div>
);

export default Navbar;
