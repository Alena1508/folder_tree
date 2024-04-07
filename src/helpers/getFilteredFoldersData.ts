import { IFolderData } from "../components/folder/Folder.tsx";

export const getFilteredFoldersData = (
  foldersData: IFolderData[],
  query: string,
) => {
  return foldersData.reduce((acc: IFolderData[], item) => {
    const newItem = { ...item };

    if (Array.isArray(item.items)) {
      newItem.items = getFilteredFoldersData(item.items, query);
    }

    if (
      newItem.name.toLowerCase().includes(query.toLowerCase()) ||
      (Array.isArray(newItem.items) && newItem.items.length > 0)
    ) {
      acc.push(newItem);
    }

    return acc;
  }, []);
};
