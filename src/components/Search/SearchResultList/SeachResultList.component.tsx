import { SearchResult } from "../SearchResult/SearchResult.component";
import "./SearchResultList.scss";

export const SearchResultsList = ({ results }: any) => {
  return (
    <div className="results-list">
      {results.map((result: any, id: any) => {
        return <SearchResult result={result.name} key={id} />;
      })}
    </div>
  );
};
