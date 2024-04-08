import { ChangeEvent } from "react";
import "./Search.scss";

interface ISearch {
  query: string;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ query, handleSearch }: ISearch) => {
  const placeholderText = "Search...";

  return (
    <div className="search">
      <input
        className="search-field"
        type="search"
        value={query}
        placeholder={placeholderText}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
