import { getFilteredFoldersData } from "./getFilteredFoldersData.ts";
import { foldersData } from "./foldersData.ts";

describe("getFilteredFoldersData", () => {
  it("should return list of files and their folders based on search query", () => {
    const searchQuery = "pack";
    const result = [
      {
        name: "Root",
        isFolder: true,
        items: [
          {
            name: "package.json",
            isFolder: false,
            items: [],
          },
        ],
      },
    ];
    expect(getFilteredFoldersData(foldersData, searchQuery)).toEqual(result);
  });
});
