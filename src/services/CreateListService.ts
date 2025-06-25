import prismaClient from "../prisma";
import { List } from "../types/Folder";

class CreateListService {
  async execute({ ...props }: List) {
    if (!props.id) {
      throw new Error("Id is required to create a new list");
    }

    const list = await prismaClient.list.create({
      data: {
        id: props.id,
      },
    });

    return list;
  }
}

export { CreateListService };
