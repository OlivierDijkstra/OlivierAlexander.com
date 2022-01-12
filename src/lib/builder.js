import TextLink from "@components/TextLink";
import Image from "next/image";
import Prism from "prismjs";
import { generateKey, rgbDataURL } from "./helpers";

class Builder {
  constructor(blocks) {
    this.blocks = blocks;
  }

  buildCodeBlock(string, language, inline, key) {
    const html = Prism.highlight(
      string,
      Prism.languages.javascript,
      "javascript"
    );

    return (
      <pre
        lang={language}
        className={`
            dark:text-gray-200 bg-gray-200 dark:bg-neutral-800
            language-${inline ? "javascript" : language}
						${inline ? "inline-block p-0.5 m-0 relative top-1.5" : ""}
        `}
        key={key}
      >
        <code dangerouslySetInnerHTML={{ __html: html }} />
      </pre>
    );
  }

  blockParagraph(block) {
    return block.paragraph.text.map(({ plain_text, href, annotations }, i) => {
      const key = generateKey(16);

      if (annotations.code) {
        return this.buildCodeBlock(plain_text, "javascript", true, key);
      }

      if (href) {
        return (
          <TextLink hideUnderline href={href}>
            {plain_text}
          </TextLink>
        );
      }

      return (
        <span
          style={{
            fontWeight: annotations.bold ? "bold" : "normal",
            fontStyle: annotations.italic ? "italic" : "normal",
          }}
          key={key}
        >
          {plain_text}
        </span>
      );
    });
  }

  codeBlock(block, key) {
    return this.buildCodeBlock(
      block.code.text[0].plain_text,
      block.code.language,
      false,
      key
    );
  }

  heading1Block(block, key) {
    return (
      <h1 className="dark:text-gray-200" key={key}>
        {block.heading_1.text[0].plain_text}
      </h1>
    );
  }

  heading2Block(block, key) {
    return (
      <h2 className="dark:text-gray-200" key={key}>
        {block.heading_2.text[0].plain_text}
      </h2>
    );
  }

  heading3Block(block, key) {
    return (
      <h3 className="dark:text-gray-200" key={key}>
        {block.heading_3.text[0].plain_text}
      </h3>
    );
  }

  imageBlock(block, key) {
    const rgbData = rgbDataURL(255, 255, 255);

    return (
      <div className="w-full h-80 relative" key={key}>
        <Image
          alt=""
          src={block.image.file.url}
          layout="fill"
          objectFit="contain"
          placeholder="blur"
          blurDataURL={rgbData}
        />
      </div>
    );
  }

  handleBlock(block) {
    const key = generateKey(16);

    switch (block.type) {
      case "code":
        return this.codeBlock(block, key);
      case "paragraph":
        return this.blockParagraph(block);
      case "heading_1":
        return this.heading1Block(block, key);
      case "heading_2":
        return this.heading2Block(block, key);
      case "heading_3":
        return this.heading3Block(block, key);
      case "image":
        return this.imageBlock(block, key);
      default:
        console.log("unknown block type", block.type);
        return null;
      // return <p className="text-red-500 font-bold">UNHANDLED BLOCK</p>;
    }
  }

  build() {
    return this.blocks.map((block) => this.handleBlock(block));
  }
}

export default Builder;
