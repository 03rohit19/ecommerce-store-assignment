import "./SearchResult.scss";

export const SearchResult = ({ result, handleSearchResults }: any) => {
  return (
    <div className="search-result" onClick={() => handleSearchResults(result)}>
      {result}
    </div>
  );
};
