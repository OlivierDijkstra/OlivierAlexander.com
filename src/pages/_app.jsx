import React from 'react';
import Head from 'next/head';
import 'styles/global.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Olivier Alexander</title>

				<link rel="preconnect" href="https://fonts.gstatic.com" />

				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
