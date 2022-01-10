import useTabs from "@olivieralexander/usetabs";
import { KBarResults, useMatches } from "kbar";
import { useState, useRef, useEffect } from "react";
import Result from "./Result";

export default function Results() {
  const { results: commandResults } = useMatches();
  const wrapperRef = useRef(null);

  const { highlightStyles, setHighlight } = useTabs({
    container: wrapperRef,
  });

  // useEffect(() => {
  //   if (commandResults.length === 0) {
  //     setHighlightedTab(null);
  //   }
  // }, [commandResults]);

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
        className="bg-gray-500 bg-opacity-5 rounded-sm"
      />
    </div>
  );
}
