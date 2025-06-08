import prismaClient from "../prisma";
import { Item } from "../types/Folder";

class CreateItemService {
  async execute({ ...props }: Item) {
    if (!props.name || !props.folderId) {
      throw new Error("Name and folderId are required to create an item");
    }

    const item = await prismaClient.item.create({
      data: {
        name: props.name,
        folderId: props.folderId,
        checked: props.checked ?? false,
      },
      include: {
        folder: true,
      },
    });

    return item;
  }
}

export { CreateItemService };
