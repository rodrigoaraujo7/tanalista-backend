import prismaClient from "../prisma";

class DeleteFolderService {
  async execute({ id }: { id: string }) {
    if (!id) {
      throw new Error("Invalid request");
    }

    const findFolder = await prismaClient.folder.findFirst({
      where: { id: id },
    });

    if (!findFolder) {
      throw new Error("Invalid ID");
    }

    await prismaClient.folder.delete({
      where: {
        id: findFolder.id,
      },
    });

    return { message: "Folder deleted" };
  }
}

export { DeleteFolderService };
