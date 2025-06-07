import prismaClient from "../prisma";

class ListFoldersService {
  async execute() {
    const folders = await prismaClient.folder.findMany();

    return folders;
  }
}

export { ListFoldersService };
