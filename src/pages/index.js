import Layout from "@components/Layout";
import LinkArrow from "@components/LinkArrow";
import Reveal from "@components/Reveal";
import Link from "next/link";

export default function Home() {
  const works = [
    {
      title: "useTabs",
      href: "https://github.com/OlivierDijkstra/useTabs",
      description: "Reusable way to create smooth tab highlights.",
    },
  ];

  return (
    <Layout>
      <Reveal>
        <header className="font-medium mb-4">
          <h1>Olivier Alexander</h1>
        </header>
      </Reveal>

      <Reveal delay={0.15}>
        <p>
          I am a software engineer based in the Netherlands, currently working
          at GUTS as a frontend developer. This is a place where I share my
          work, tools and other cool things I found around the web.
        </p>
      </Reveal>

      <Reveal delay={0.3}>
        <div className="grid gap-8 md:gap-12 grid-cols-2 mt-24">
          <section>
            <h2 className="mb-1">
              <span className="font-serif text-lg italic font-medium underline underline-offset-2 text-gray-600">
                Works
              </span>
            </h2>

            <ul>
              {works.map(({ title, href, description }) => (
                <li key={title} className="mb-6">
                  <a
                    className="flex group"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="pr-2">
                      <h3 className="font-medium">{title}</h3>

                      <p className="text-sm">{description}</p>
                    </div>

                    <LinkArrow size={16} />
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-1">
              <Link href="/tools">
                <a className="font-serif text-lg italic font-medium underline underline-offset-2 text-gray-600">
                  Tools
                </a>
              </Link>
            </h2>

            <p className="text-sm">
              A collection of tools and packages I use on a daily basis to make
              my live a little easier.
            </p>
          </section>
        </div>
      </Reveal>
    </Layout>
  );
}
