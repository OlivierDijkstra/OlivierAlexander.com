import useTabs from "@olivieralexander/usetabs";
import { KBarResults, useMatches } from "kbar";
import { useRef, useEffect } from "react";
import Result from "./Result";

export default function Results() {
  const { results: commandResults } = useMatches();
  const wrapperRef = useRef(null);

  const { highlightStyles, setHighlight } = useTabs({
    container: wrapperRef,
  });

  useEffect(() => {
    if (commandResults.length === 0) {
      setHighlight(null);
    }
  }, [commandResults, setHighlight]);

  return (
    <div className="relative" ref={wrapperRef}>
      <KBarResults
        items={commandResults}
        onRender={({ item, active }) => (
          <Result item={item} active={active} highlight={setHighlight} />
        )}
      />

      <div
        style={highlightStyles}
        className="bg-neutral-500 bg-opacity-5 dark:bg-opacity-20 rounded-sm"
      />
    </div>
  );
}
