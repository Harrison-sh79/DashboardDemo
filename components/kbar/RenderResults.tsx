import { KBarResults, useMatches } from "kbar";
import ResultItem from "./ResultItem";

export default function RenderResults() {


/* `const { results } = useMatches();` is using the `useMatches` hook from the `kbar` library to get
the search results. It destructures the `results` property from the object returned by the hook,
which contains an array of search results. These results can be used to render the search results in
the UI. */

  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) => {
        return typeof item === "string" ? (
          <div className="py-3 px-4 text-sm text-violet-800">{item}</div>
        ) : (
          <ResultItem
            action={item}
            active={active}
          />
        )
      }
      }
    />
  );
}