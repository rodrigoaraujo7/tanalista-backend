export interface List {
  id: string;
  title: string;
  folders: Folder[];
}

export interface Folder {
  title: string;
  description?: string;
  listId: string;
  list: List;
  items: Item[];
}

export interface Item {
  name: string;
  checked?: boolean;
  folderId: string;
  folder: Folder;
  link?: string;
}
