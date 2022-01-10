import Layout from "@components/Layout";
import Reveal from "@components/Reveal";
import TextLink from "@components/TextLink";
import { STAGGER_DELAY } from "@constants/animations";
import tools from "@constants/tools";
import Image from "next/image";
import { ArrowRight } from "phosphor-react";

export default function Tools() {
  return (
    <Layout>
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
        {tools.map(({ name, description, image, url }, i) => (
          <Reveal
            delay={i === 0 ? STAGGER_DELAY : STAGGER_DELAY + STAGGER_DELAY * i}
            key={name.toLowerCase()}
          >
            <a href={url} target="_blank" rel="noreferrer">
              <article className="group grid auto-cols-max grid-flow-col gap-4 items-center">
                <span
                  className="grid place-items-center 
                  w-20 h-20 p-2 rounded-full bg-gray-100 dark:bg-neutral-800
                  text-4xl"
                >
                  {typeof image === "string" ? (
                    image
                  ) : (
                    <Image
                      src={image}
                      width={50}
                      height={50}
                      objectFit="contain"
                      placeholder="blur"
                      alt={name}
                    />
                  )}
                </span>

                <div className="w-80">
                  <h2 className="font-medium text-xl">{name}</h2>
                  <p className="text-gray-500">{description}</p>
                </div>

                <span
                  className="text-gray-500 
                  transform-gpu transition-transform duration-75
                  group-hover:translate-x-2 "
                >
                  <ArrowRight size={32} weight="thin" />
                </span>
              </article>
            </a>
          </Reveal>
        ))}
      </div>
    </Layout>
  );
}