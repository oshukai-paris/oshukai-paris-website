import React from 'react';

import './style.scss';
import Helmet from './helmet';
import Header from './header';
import Footer from './footer';


const OneColumnLayout = ({ children }) => (
	<div className="container-fluid">
		<Helmet />
		<Header />
		<div className="container">
			<div className="columns is-mobile is-centered">
				<div className="column is-9">
					{children}
				</div>
			</div>
    	</div>
		<Footer />
	</div>
);


export default OneColumnLayout;
