import React from 'react';
import PropTypes from 'prop-types';
import 'styles/global.scss';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<title>Olivier Alexander</title>

			<Component {...pageProps} />
		</>
	);
}

MyApp.propTypes = {
	Component: PropTypes.any.isRequired,
	pageProps: PropTypes.any.isRequired
};

export default MyApp;
