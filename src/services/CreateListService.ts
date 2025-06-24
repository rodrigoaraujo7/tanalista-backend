import prismaClient from "../prisma";
import { List } from "../types/Folder";

class CreateListService {
  async execute({ ...props }: List) {
    if (!props.id && !props.title) {
      throw new Error("Id and title is required to create a new list");
    }

    const list = await prismaClient.list.create({
      data: {
        id: props.id,
        title: props.title,
      },
    });

    return list;
  }
}

export { CreateListService };
