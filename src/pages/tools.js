import Layout from "@components/Layout";
import Reveal from "@components/Reveal";
import TextLink from "@components/TextLink";
import { STAGGER_DELAY } from "@constants/animations";
import notion from "@lib/notion";
import { NextSeo } from "next-seo";
import { ArrowRight } from "phosphor-react";

export default function Tools({ tools }) {
  const seo = {
    title: "Tools",
    description: "Tools I use to build and maintain my projects.",
  };

  return (
    <Layout>
      <NextSeo {...seo} openGraph={seo} />

      <h1 className="mb-4 text-2xl font-medium">Tools</h1>

      <Reveal delay={STAGGER_DELAY}>
        <p className="mb-2">
          A collection of tools and apps I use on a daily basis to make my life
          easier. A full list of my zsh and homebrew packages can be found on my{" "}
          <TextLink href="https://github.com/OlivierDijkstra?tab=repositories">
            Github
          </TextLink>{" "}
          profile.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-8 mt-16">
        {tools.map(({ properties: { name, description, icon, url } }, i) => {
          return (
            <Reveal
              delay={
                i === 0 ? STAGGER_DELAY : STAGGER_DELAY + STAGGER_DELAY * i
              }
              key={name.title[0].plain_text.toLowerCase()}
            >
              <a href={url.url} target="_blank" rel="noreferrer">
                <article className="group grid auto-cols-max grid-flow-col gap-4 items-center">
                  <span
                    className="grid place-items-center
                      w-12 h-12 sm:w-20 sm:h-20 p-2 rounded-full bg-neutral-100 dark:bg-neutral-800
                      text-2xl sm:text-4xl"
                  >
                    {icon.rich_text[0].plain_text}
                  </span>

                  <div className="w-40 sm:w-60 md:w-80">
                    <h2 className="font-medium text-lg sm:text-xl">
                      {name.title[0].plain_text}
                    </h2>
                    <p className="text-neutral-500 text-sm sm:text-base">
                      {description.rich_text[0].plain_text}
                    </p>
                  </div>

                  <span
                    className="text-neutral-500
                  transform-gpu transition-transform duration-75
                  group-hover:translate-x-2 "
                  >
                    <ArrowRight size={32} weight="thin" />
                  </span>
                </article>
              </a>
            </Reveal>
          );
        })}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const { results } = await notion.databases.query({
    database_id: "8fd7c87d8ee748999adaebbba27767ef",
    sorts: [{ property: "created_at", direction: "ascending" }],
  });

  return {
    props: {
      tools: results,
    },
    revalidate: 3600,
  };
}
