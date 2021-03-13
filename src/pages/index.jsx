import React from 'react';
import Layout from 'components/Layout';
import Link from 'components/Link';
import Aurora from 'components/Aurora';

export default function Page() {
	return (
		<Layout>
			<Aurora />

			<h1 className="text-6xl mb-12 font-medium">Hello world.</h1>

			<p className="text-base font-light leading-relaxed">
				Developer of iSeats, Freelance frontend / backend developer, lover of
				pizzas, learning everyday to become a better developer.
			</p>

			<div className="mt-12 grid gap-2 grid-cols-1">
				<Link href="https://github.com/OlivierDijkstra">Github</Link>
				<Link href="https://twitter.com/Oli12392498">Twitter</Link>
			</div>
		</Layout>
	);
}
