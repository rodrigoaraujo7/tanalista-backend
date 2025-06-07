export interface Folder {
  title: string;
  description?: string;
  items: Item[];
}

export interface Item {
  name: string;
  checked?: boolean;
  folderId: string;
  folder: Folder;
}
