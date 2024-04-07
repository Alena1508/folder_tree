import { useEffect, useState } from "react";
import File from "../file/File.tsx";

export interface IFolderData {
  name: string;
  isFolder: boolean;
  items: IFolderData[];
}

export interface IFolder {
  folderData: IFolderData;
  query: any;
}

const Folder = ({ folderData, query }: IFolder) => {
  const [expand, setExpand] = useState<boolean>(false);

  useEffect(() => {
    if (query !== "" && Object.keys(folderData).length !== 0) {
      setExpand(true);
    }
  }, [query, folderData]);

  const getIcon = () => {
    if (folderData.isFolder) {
      return expand ? "-" : "+";
    }
    return "";
  };

  return (
    <div>
      {folderData.isFolder ? (
        <>
          {getIcon()}
          <span onClick={() => setExpand(!expand)}>{folderData.name}</span>
          <br />
          {expand
            ? folderData.items.map((f) => (
                <div style={{ paddingLeft: 15 }} key={f.name}>
                  <Folder folderData={f} query={query} />
                </div>
              ))
            : null}
        </>
      ) : (
        <File name={folderData.name} />
      )}
    </div>
  );
};

export default Folder;
