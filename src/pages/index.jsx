import React from 'react';
import Layout from 'components/Layout';
import Container from 'components/Container';

export default function Page() {
	return (
		<Layout>
			<Container>
				<p className="text-base">
					Developer of iSeats, Freelance frontend / backend developer, lover of
					pizzas, learning everyday to become a better developer.
				</p>

				<a
					className="link mt-12 mb-2 block"
					href="https://github.com/OlivierDijkstra"
				>
					Github
				</a>
				<a className="link mb-2 block" href="https://twitter.com/Oli12392498">
					Twitter
				</a>
			</Container>
		</Layout>
	);
}
