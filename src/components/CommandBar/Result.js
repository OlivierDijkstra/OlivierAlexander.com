import {
  ArrowRight,
  EnvelopeSimple,
  FolderSimple,
  GithubLogo,
  TwitterLogo,
} from "phosphor-react";
import { useEffect, useRef } from "react";

export default function Result({ item, active, highlight }) {
  const ref = useRef(null);

  useEffect(() => {
    if (active && ref?.current) {
      highlight(ref);
    }
  }, [active]);

  return typeof item === "string" ? (
    <span className="text-neutral-500 text-sm capitalize flex items-center h-12">
      {item}
    </span>
  ) : (
    <div ref={ref} className="h-12 rounded flex items-center cursor-pointer">
      <span className="pl-2 inline-flex gap-2 items-center">
        {item?.type === "link" && <ArrowRight />}
        {item?.type === "group" && <FolderSimple />}
        {item?.type === "github" && <GithubLogo />}
        {item?.type === "contact" && <EnvelopeSimple />}
        {item?.type === "twitter" && <TwitterLogo />}

        {item.name}
      </span>
    </div>
  );
}
