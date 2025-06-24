import prismaClient from "../prisma";
import { Folder } from "../types/Folder";

class CreateFolderService {
  async execute({ ...props }: Folder) {
    if (!props.title) {
      throw new Error("Folder title is required");
    }

    const folder = await prismaClient.folder.create({
      data: {
        title: props.title,
        description: props.description,
        listId: props.listId,
      },
    });

    return folder;
  }
}

export { CreateFolderService };
