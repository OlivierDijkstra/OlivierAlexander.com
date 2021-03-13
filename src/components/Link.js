import React from 'react';
import PropTypes from 'prop-types';

Link.propTypes = {
	children: PropTypes.node.isRequired,
	href: PropTypes.string.isRequired
};

export default function Link({ children, href }) {
	return (
		<a
			href={href}
			className="text-base inline-block hover:underline cursor-pointer text-link"
		>
			{children}
		</a>
	);
}
