import React from 'react';
import { Link } from "gatsby"
import oshukaiLogo from '../images/oshukai-karate-kobudo.png';

import './style.scss';


const NavbarItem = props => (
	<span className="navbar-item">
		<Link to={props.link}>
			{props.text}
		</Link>
	</span>
);

const NavbarBurger = props => (
	<button
		onClick={props.toggleMenu}
		className={`button navbar-burger ${props.active ? 'is-active' : ''}`}
	>
		<span />
		<span />
		<span />
	</button>
);

export default class Navbar extends React.Component {
	state = {
		activeMenu: false,
	};
	toggleMenu = () => {
		this.setState({
			activeMenu: !this.state.activeMenu,
		});
	};
	render() {
		return (
			<nav className={`navbar is-fixed-top is-white`}>
				<div className="navbar-brand">
					<NavbarItem
						link="/"
						text={<img src={oshukaiLogo} alt="Logo" />}
					/>
					<NavbarBurger
						active={this.state.activeMenu}
						toggleMenu={this.toggleMenu}
					/>
				</div>
				<div className={`navbar-menu ${this.state.activeMenu ? 'is-active' : ''}`}>
					<div className="navbar-end">
						<NavbarItem link="/about" text="A Propos"/>
						<NavbarItem link="/blog" text="Actualités"/>
					</div>
				</div>
			</nav>
		);
	}
}
