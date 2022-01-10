import { useKBar } from "kbar";
import { Command } from "phosphor-react";

export default function Layout({ children }) {
  const { query } = useKBar();

  const copyrightYear = new Date().getFullYear();

  return (
    <>
      <div className="mt-12 mx-auto max-w-2xl p-6 fill-screen">
        <button
          onClick={() => query.toggle()}
          className="grid place-items-center h-12 w-12 mb-4
          text-gray-500 cursor-pointer
          bg-gray-100 dark:bg-neutral-900 border border-gray-300 dark:border-neutral-700 rounded
          transition-all duration-100 ease-in-out
          ring-0 ring-gray-500 ring-opacity-10
          hover:ring-4 focus:ring-4 focus:outline-none"
        >
          <Command size={32} weight="light" />
        </button>
        {children}
      </div>

      <footer
        className="border-t border-gray-200 dark:border-neutral-800 
        bg-gray-100 dark:bg-neutral-900 w-full mt-8"
      >
        <div className="mx-auto max-w-2xl p-6 text-gray-400 dark:text-gray-600">
          <p>{copyrightYear}</p>
        </div>
      </footer>
    </>
  );
}
