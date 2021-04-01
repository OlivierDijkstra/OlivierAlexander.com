import React from 'react';
import Layout from 'components/Layout';
import Container from 'components/Container';
import request from 'graphql-request';
import Project from 'components/Project';

export default function Page({ projects }) {
	return (
		<Layout>
			<Container>
				{projects.length > 0 &&
					projects.map((project) => <Project {...project} />)}
			</Container>
		</Layout>
	);
}

export async function getStaticProps() {
	const data = await request(
		process.env.API_URL,
		`{
	    projects {
            id,
	        title,
			description,
			url,
			image {
				url
			}
	    }
	    }`
	);

	return {
		props: {
			projects: data?.projects
		},
		revalidate: 3600
	};
}
