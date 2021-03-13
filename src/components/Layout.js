import React from 'react';
import PropTypes from 'prop-types';

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default function Layout({ children }) {
	return (
		<div className="min-h-screen">
			<main className="container mx-auto w-full pt-24 px-one md:w-3/4 md:max-w-2xl md:pt-32 md:px-0">
				{children}
			</main>
		</div>
	);
}
