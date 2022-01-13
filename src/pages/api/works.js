import notion from "@lib/notion";

export default async function serverSideCall(req, res) {
  const { results } = await notion.databases.query({
    database_id: "e7e4798b68734ed290a4cc5c4f4c7e05",
    sorts: [{ property: "created_at", direction: "ascending" }],
  });

  // map results to an object containing the name and slug of each item
  const works = results.map(({ properties: { name, slug } }) => {
    return {
      name: name.title[0].plain_text,
      slug: slug.rich_text[0].plain_text,
    };
  });

  res.status(200).json({
    data: works,
  });
}
