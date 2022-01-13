import Layout from "@components/Layout";
import Reveal from "@components/Reveal";
import Builder from "@lib/builder";
import notion from "@lib/notion";
import { NextSeo } from "next-seo";

export default function Work({ work, blocks, slug }) {
  const {
    properties: { name, description },
  } = work;

  const seo = {
    title: name.title[0].plain_text,
    description: description.rich_text[0].plain_text,
  };

  const builder = new Builder(blocks);

  const imageBlocks = builder.findBlocksByType("image");
  const imageSeo = imageBlocks.map((block) => {
    return {
      url: block.image.file.url,
    };
  });

  return (
    <Layout>
      <NextSeo
        {...seo}
        openGraph={{
          ...seo,
          url: `https://olivierdijkstra.com/${slug}`,
          type: "article",
          imageSeo,
        }}
      />

      <Reveal>
        <header className="mb-4 prose prose-neutral">
          <h1 className="font-semibold dark:text-neutral-200">
            {name.title[0].plain_text}
          </h1>

          <h2 className="font-normal text-2xl text-neutral-500">
            {description.rich_text[0].plain_text}
          </h2>
        </header>
      </Reveal>

      <Reveal delay={0.15}>
        <main className="dark:text-neutral-200 prose">{builder.build()}</main>
      </Reveal>
    </Layout>
  );
}

export async function getStaticPaths() {
  const { results } = await notion.databases.query({
    database_id: "e7e4798b68734ed290a4cc5c4f4c7e05",
  });

  // Get the slug from every result and add it to the paths
  const paths = results.map((result) => ({
    params: {
      slug: result.properties.slug.rich_text[0].plain_text,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const { results } = await notion.databases.query({
    database_id: "e7e4798b68734ed290a4cc5c4f4c7e05",
  });

  // Get the first result that matches the slug
  const work = results.find(
    (result) => result.properties.slug.rich_text[0].plain_text === slug
  );

  const { results: blocks } = await notion.blocks.children.list({
    block_id: work.id,
  });

  return {
    props: {
      work,
      blocks,
      slug,
    },
    revalidate: 3600,
  };
}
