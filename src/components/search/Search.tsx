import { ChangeEvent } from "react";
import { TextField } from "@mui/material";

interface ISearch {
  query: string;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ query, handleSearch }: ISearch) => {
  const placeholderText = "Search...";

  return (
    <div>
      <TextField
        type="search"
        value={query}
        label={placeholderText}
        onChange={handleSearch}
        color="primary"
      />
    </div>
  );
};

export default Search;
