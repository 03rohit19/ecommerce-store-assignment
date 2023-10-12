import "./SearchResult.scss";

export const SearchResult = ({ result, handleSearchResults }: any) => {
  return (
    <div className="search-result" onClick={() => handleSearchResults(result)}>
      <span>{result.title}</span>
      <img src={result.image} height="20px" width="20px" alt="Not available" />
    </div>
  );
};
