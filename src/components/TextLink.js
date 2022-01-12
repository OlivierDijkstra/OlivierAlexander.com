import LinkArrow from "./LinkArrow";

export default function TextLink({ href, children, hideUnderline, ...rest }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" {...rest}>
      <span
        className={`
          group inline-flex font-serif font-medium italic text-black dark:text-white
          ${hideUnderline ? "underline-none" : "underline underline-offset-2"}
        `}
      >
        {children}
        <LinkArrow />
      </span>
    </a>
  );
}
