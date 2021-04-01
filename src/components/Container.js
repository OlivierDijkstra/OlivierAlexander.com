import React from 'react';

export default function Container({ children }) {
	return (
		<section className="container mx-auto max-w-4xl p-4">{children}</section>
	);
}
