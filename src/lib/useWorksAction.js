import { useRegisterActions } from "kbar";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { generateKey } from "./helpers";

const searchId = generateKey();

export default function useWorksAction() {
  const router = useRouter();
  const [results, setResults] = useState();

  const defaultAction = {
    id: searchId,
    name: "Search works...",
    shortcut: ["?"],
    keywords: "works find search work portfolio",
    section: "Works",
  };

  useEffect(() => {
    fetch("/api/works").then((response) => {
      response.json().then(({ data }) => {
        setResults([...data]);
      });
    });
  }, []);

  const searchActions = useMemo(() => {
    if (!results) {
      return null;
    }

    return results.map(({ name, slug }) => {
      return {
        id: generateKey(),
        parent: searchId,
        name,
        shortcut: [],
        keywords: [name, slug],
        perform: () => router.push(`/${slug}`),
      };
    });
  }, [results, router]);

  const rootWorksAction = useMemo(
    () => (searchActions?.length ? defaultAction : null),
    [searchActions, defaultAction]
  );

  const actions = useMemo(() => {
    if (!rootWorksAction) {
      return defaultAction;
    }

    return [rootWorksAction, ...searchActions];
  }, [rootWorksAction, searchActions, defaultAction]);

  useRegisterActions(actions, [actions]);
}
