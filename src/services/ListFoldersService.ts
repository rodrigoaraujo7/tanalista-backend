import prismaClient from "../prisma";

class ListFoldersService {
  async execute() {
    const folders = await prismaClient.folder.findMany({
      include: {
        items: true,
      },
    });

    return folders;
  }
}

export { ListFoldersService };
