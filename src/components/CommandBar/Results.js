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
    if (wrapperRef.current) {
      // Get the first element in wrapperRef
      const firstElement = wrapperRef.current.firstElementChild;

      if (firstElement) {
        // Remove max-height
        firstElement.style.maxHeight = "";
      }
    }
  }, [wrapperRef]);

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
