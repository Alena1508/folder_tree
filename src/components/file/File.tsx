import { useEffect, useState } from "react";

export interface IFolderData {
  name: string;
  isFolder: boolean;
  items: IFolderData[];
}

export interface IFolder {
  foldersData: IFolderData[];
  query: string;
}

const File = ({ foldersData, query }: IFolder) => {
  const [expand, setExpand] = useState<boolean>(false);

  // useEffect(() => {
  //   if (query !== "" && Object.keys(foldersData).length !== 0) {
  //     setExpand(true);
  //   }
  // }, [query, foldersData]);

  const getIcon = (folder) => {
    if (folder.isFolder) {
      return expand ? "-" : "+";
    }
    return "";
  };
  return (
    <div>
      {foldersData.map((folder) => (
        <>
          {getIcon(folder)}
          <span onClick={() => setExpand(!expand)}>{folder.name}</span>
          <br />
          {folder.items && folder.items.length > 0 && (
            <div
              style={{ display: expand ? "block" : "none", paddingLeft: 15 }}
            >
              <File foldersData={folder.items} query={query} />
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default File;
