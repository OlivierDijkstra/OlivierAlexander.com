import { request } from 'graphql-request';

export default async function handler(req, res) {
	const data = await request(
		process.env.API_URL,
		`{
	    posts {
            id,
	        title
	    }
	    }`
	);

	res.status(200).json(data?.posts);
}
