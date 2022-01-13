import { Check, Copy } from "phosphor-react";
import { useState } from "react";

export default function Code({ html, raw, language, ...rest }) {
  const [copied, setCopied] = useState(false);

  const languageClass = language
    ? `language-${language}`
    : "language-javascript";

  // function that copies the code snippet to the clipboard
  function copyToClipboard() {
    try {
      navigator.clipboard.writeText(raw);
      setCopied(true);
    } catch {
      return;
    }

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <pre lang={language} className={`relative ${languageClass}`} {...rest}>
      <code dangerouslySetInnerHTML={{ __html: html }} />

      <button
        onClick={copyToClipboard}
        className="absolute right-1 bottom-1 flex  items-center
            text-xs font-sans
            bg-neutral-500 bg-opacity-10 dark:bg-opacity-25 px-2 py-1 rounded 
            border dark:border-neutral-600 border-neutral-300
            text-neutral-500
            transition-colors
            hover:bg-opacity-5 dark:hover:bg-opacity-10 hover:dark:border-neutral-800 hover:border-neutral-200
            "
      >
        {copied ? (
          <>
            <span className="pr-2">Copied</span>
            <span className="text-green-500">
              <Check />
            </span>
          </>
        ) : (
          <>
            <span className="pr-2">Copy</span> <Copy />
          </>
        )}
      </button>
    </pre>
  );
}
