import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import File from "../file/File.tsx";
import "./Folder.scss";

export interface IFolderData {
  name: string;
  isFolder: boolean;
  items: IFolderData[];
}

export interface IFolder {
  folderData: IFolderData;
  query: string;
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
      return expand ? <RemoveIcon /> : <AddIcon />;
    }
    return "";
  };

  return (
    <div className="folder">
      {folderData.isFolder ? (
        <>
          <div className="folder-name">
            {getIcon()}
            <span onClick={() => setExpand(!expand)}>{folderData.name}</span>
          </div>
          {expand &&
            folderData.items.map((f) => (
              <div style={{ paddingLeft: 15 }} key={f.name}>
                <Folder folderData={f} query={query} />
              </div>
            ))}
        </>
      ) : (
        <File name={folderData.name} />
      )}
    </div>
  );
};

export default Folder;
