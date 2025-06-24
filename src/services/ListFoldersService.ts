import prismaClient from "../prisma";

class ListFoldersService {
  async execute(listId: string) {
    const list = await prismaClient.list.findFirst({
      where: {
        id: listId,
      },
    });

    if (!list) {
      throw new Error("ID not found");
    }

    const folders = await prismaClient.folder.findMany({
      where: {
        listId: list.id,
      },
      include: {
        items: true,
      },
    });

    return folders;
  }
}

export { ListFoldersService };
