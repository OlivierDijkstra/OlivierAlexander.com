import React from 'react';
import Link from 'next/link';

export default function Navigation() {
	return (
		<nav className="sticky z-20 top-0 blur w-screen h-20 mb-20 mt-12">
			<div className="container mx-auto max-w-4xl h-full p-4">
				<div className="flex items-center justify-between w-full h-full">
					<Link href="/">
						<a className="sm:text-4xl text-2xl font-bold link">
							Olivier Alexander.
						</a>
					</Link>

					<div className="grid auto-cols-max grid-flow-col items-center gap-4">
						<Link href="/projects">
							<a className="sm:text-lg text-base font-semibold link">
								Projects
							</a>
						</Link>

						<Link href="/contact">
							<a className="sm:text-lg text-base font-semibold link">Contact</a>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}
