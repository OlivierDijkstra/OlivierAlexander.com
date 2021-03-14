import React, { useEffect, useState } from 'react';
import Layout from 'components/Layout';
import Link from 'components/Link';
import { CupertinoPane } from 'cupertino-pane';
import Aurora from 'components/Aurora';

export default function Page() {
	const [pane, setPane] = useState();

	useEffect(() => {
		setPane(
			new CupertinoPane('.pane', {
				backdrop: true,
				pushElement: '.content'
			})
		);
	}, []);

	const openDrawer = () => {
		if (window) {
			pane.present({ animate: true });
		}
	};

	return (
		<Layout>
			<Aurora />

			<h1 className="text-6xl mb-12 font-medium">Hello world.</h1>

			<h4
				className="text-2xl mb-6 cursor-pointer hover:underline"
				onClick={openDrawer}
			>
				Navigation
			</h4>

			<p className="text-base font-light leading-relaxed">
				Developer of iSeats, Freelance frontend / backend developer, lover of
				pizzas, learning everyday to become a better developer.
			</p>

			<div className="mt-12 grid gap-2 grid-cols-1">
				<Link href="https://github.com/OlivierDijkstra">Github</Link>
				<Link href="https://twitter.com/Oli12392498">Twitter</Link>
			</div>

			<div className="pane">
				<p className="text-base font-light leading-relaxed">
					Developer of iSeats, Freelance frontend / backend developer, lover of
					pizzas, learning everyday to become a better developer.
				</p>
				<p className="text-base font-light leading-relaxed">
					Developer of iSeats, Freelance frontend / backend developer, lover of
					pizzas, learning everyday to become a better developer.
				</p>
				<p className="text-base font-light leading-relaxed">
					Developer of iSeats, Freelance frontend / backend developer, lover of
					pizzas, learning everyday to become a better developer.
				</p>
				<p className="text-base font-light leading-relaxed">
					Developer of iSeats, Freelance frontend / backend developer, lover of
					pizzas, learning everyday to become a better developer.
				</p>
				<p className="text-base font-light leading-relaxed">
					Developer of iSeats, Freelance frontend / backend developer, lover of
					pizzas, learning everyday to become a better developer.
				</p>
				<p className="text-base font-light leading-relaxed">
					Developer of iSeats, Freelance frontend / backend developer, lover of
					pizzas, learning everyday to become a better developer.
				</p>
				<p className="text-base font-light leading-relaxed">
					Developer of iSeats, Freelance frontend / backend developer, lover of
					pizzas, learning everyday to become a better developer.
				</p>
				<p className="text-base font-light leading-relaxed">
					Developer of iSeats, Freelance frontend / backend developer, lover of
					pizzas, learning everyday to become a better developer.
				</p>
				<p className="text-base font-light leading-relaxed">
					Developer of iSeats, Freelance frontend / backend developer, lover of
					pizzas, learning everyday to become a better developer.
				</p>
				<p className="text-base font-light leading-relaxed">
					Developer of iSeats, Freelance frontend / backend developer, lover of
					pizzas, learning everyday to become a better developer.
				</p>
				<p className="text-base font-light leading-relaxed">
					Developer of iSeats, Freelance frontend / backend developer, lover of
					pizzas, learning everyday to become a better developer.
				</p>

				<p className="text-base font-light leading-relaxed">
					Developer of iSeats, Freelance frontend / backend developer, lover of
					pizzas, learning everyday to become a better developer.
				</p>
				<p className="text-base font-light leading-relaxed">
					Developer of iSeats, Freelance frontend / backend developer, lover of
					pizzas, learning everyday to become a better developer.
				</p>
			</div>
		</Layout>
	);
}
