import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'styles/global.css';
import { AuroraContext } from 'context/AuroraContext';

function MyApp({ Component, pageProps }) {
	const [aurora, setAurora] = useState({ x: 0, y: 0 });

	function handleMouseMove(e) {
		const size = document.body.getBoundingClientRect();

		setAurora({
			x: e.clientX - (size.left + size.width / 2),
			y: e.clientY - (size.top + size.height / 2)
		});
	}

	return (
		<div onMouseMove={handleMouseMove}>
			<title>Olivier Alexander</title>

			<AuroraContext.Provider value={{ aurora }}>
				<Component {...pageProps} />
			</AuroraContext.Provider>
		</div>
	);
}

MyApp.propTypes = {
	Component: PropTypes.any.isRequired,
	pageProps: PropTypes.any.isRequired
};

export default MyApp;
