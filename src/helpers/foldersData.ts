import { IFolderData } from "../components/folder/Folder.tsx";

export const foldersData: IFolderData[] = [
  {
    name: "Root",
    isFolder: true,
    items: [
      {
        name: "public",
        isFolder: true,
        items: [
          {
            name: "Data",
            isFolder: true,
            items: [
              {
                name: "folderData.js",
                isFolder: false,
                items: [],
              },
            ],
          },
          {
            name: "index.html",
            isFolder: false,
            items: [],
          },
        ],
      },
      {
        name: "src",
        isFolder: true,
        items: [
          {
            name: "components",
            isFolder: true,
            items: [
              {
                name: "File.js",
                isFolder: false,
                items: [],
              },
            ],
          },
          {
            name: "App.js",
            isFolder: false,
            items: [],
          },
          {
            name: "index.js",
            isFolder: false,
            items: [],
          },
          {
            name: "styles.css",
            isFolder: false,
            items: [],
          },
        ],
      },
      {
        name: "package.json",
        isFolder: false,
        items: [],
      },
    ],
  },
];
