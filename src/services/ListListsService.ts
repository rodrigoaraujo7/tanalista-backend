import prismaClient from "../prisma";

class ListListsService {
  async execute() {
    const lists = await prismaClient.list.findMany();

    return lists;
  }
}

export { ListListsService };
