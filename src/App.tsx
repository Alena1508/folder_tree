import { ChangeEvent, useMemo, useState } from "react";
import Folder from "./components/folder/Folder.tsx";
import { foldersData } from "./helpers/foldersData.ts";
import Search from "./components/search/Search.tsx";
import { getFilteredFoldersData } from "./helpers/getFilteredFoldersData.ts";
import "./App.scss";

const App = () => {
  const [query, setQuery] = useState<string>("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const filteredData = useMemo(
    () => getFilteredFoldersData(foldersData, query),
    [query],
  );

  return (
    <div className="app">
      <h2>Folder tree</h2>
      <Search query={query} handleSearch={handleSearch} />
      {filteredData.length ? (
        filteredData.map((f) => (
          <Folder key={f.name} folderData={f} query={query} />
        ))
      ) : (
        <p>No matches found</p>
      )}
    </div>
  );
};

export default App;
