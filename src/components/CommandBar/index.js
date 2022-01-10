import actions from "@constants/actions";
import { AnimatePresence, motion } from "framer-motion";
import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarSearch,
} from "kbar";
import { useRouter } from "next/router";
import Results from "./Results";

export default function CommandBar({ children }) {
  const router = useRouter();

  return (
    <AnimatePresence exitBeforeEnter>
      <KBarProvider
        actions={actions(router)}
        options={{
          enabledHistory: true,
        }}
      >
        <KBarPortal>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.1,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.1,
              },
            }}
            className="bg-white dark:bg-black bg-opacity-80 dark:bg-opacity-80
             backdrop-blur-sm
             h-screen w-screen fixed top-0 left-0"
          />

          <KBarPositioner>
            <KBarAnimator className="w-full max-w-xl">
              <div
                className="smooth-shadow dark:shadow-none 
                dark:bg-neutral-900 bg-white
                dark:bg-opacity-75 dark:backdrop-filter dark:backdrop-blur-md
                w-full py-2 px-2 rounded-xl"
              >
                <KBarSearch
                  className="w-full p-4 outline-none mb-4 bg-gray-50 dark:bg-neutral-800 rounded"
                  placeholder="Search"
                />

                <div className="mt-2 border-t border-gray-200 dark:border-neutral-800">
                  <Results />
                </div>
              </div>
            </KBarAnimator>
          </KBarPositioner>
        </KBarPortal>

        {children}
      </KBarProvider>
    </AnimatePresence>
  );
}
