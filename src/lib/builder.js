import Code from "@components/Code";
import TextLink from "@components/TextLink";
import Image from "next/image";
import Prism from "prismjs";
import { generateKey, rgbDataURL } from "./helpers";

class Builder {
  constructor(blocks) {
    this.blocks = blocks;
  }

  buildCodeBlock(string, language, inline, key) {
    const html = Prism.highlight(string, Prism.languages.javascript, language);

    if (inline) {
      return (
        <code
          key={key}
          className={`
          language-${inline ? "javascript" : language}
        `}
        >
          {string}
        </code>
      );
    }

    return <Code html={html} raw={string} language={language} />;
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
      <h1 className="dark:text-neutral-200" key={key}>
        {block.heading_1.text[0].plain_text}
      </h1>
    );
  }

  heading2Block(block, key) {
    return (
      <h2 className="dark:text-neutral-200" key={key}>
        {block.heading_2.text[0].plain_text}
      </h2>
    );
  }

  heading3Block(block, key) {
    return (
      <h3 className="dark:text-neutral-200" key={key}>
        {block.heading_3.text[0].plain_text}
      </h3>
    );
  }

  imageBlock(block, key) {
    const rgbData = rgbDataURL(255, 255, 255);

    return (
      // Prose is messing stuff up here. Need to figure out why.
      <div className="w-full relative" style={{ height: "320px" }} key={key}>
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
        console.log("image", block);
        return this.imageBlock(block, key);
      default:
        console.log("unknown block type", block.type);
        return null;
      // return <p className="text-red-500 font-bold">UNHANDLED BLOCK</p>;
    }
  }

  findBlocksByType(type) {
    return this.blocks.filter((block) => block.type === type);
  }

  build() {
    return this.blocks.map((block) => this.handleBlock(block));
  }
}

export default Builder;
