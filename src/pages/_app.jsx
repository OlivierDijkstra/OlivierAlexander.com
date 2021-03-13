import React from 'react';
import PropTypes from 'prop-types';
import 'styles/index.scss';

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

MyApp.propTypes = {
	Component: PropTypes.any.isRequired,
	pageProps: PropTypes.any.isRequired
};

export default MyApp;
