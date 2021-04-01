import React from 'react';
import Image from 'next/image';

export default function Project({ id, title, description, image, url }) {
	return (
		<article
			key={id}
			className="group rounded-xl relative overflow-hidden mb-10"
		>
			<button
				className="group w-full h-full text-left"
				type="button"
				onClick={() => window.open(url)}
			>
				<div className="group-focus:opacity-100 group-hover:opacity-100 opacity-0 transition-opacity bg-black bg-opacity-40 relative z-10 w-full h-full p-8">
					<h1 className="leading-relaxed md:text-5xl sm:text-4xl text-2xl font-extrabold">
						{title}
					</h1>

					<p className="text-base font-semibold line-clamp-1">{description}</p>
				</div>

				<Image src={image.url} alt={title} layout="fill" objectFit="cover" />
			</button>
		</article>
	);
}
