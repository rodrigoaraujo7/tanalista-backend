import prismaClient from "../prisma";

class DeleteFolderService {
  async execute({ id }: { id: string }) {
    if (!id) {
      throw new Error("Folder ID is required");
    }

    const findFolder = await prismaClient.folder.findFirst({
      where: { id: id },
    });

    if (!findFolder) {
      throw new Error("Invalid ID");
    }

    await prismaClient.item.deleteMany({
      where: {
        folderId: findFolder.id,
      },
    });

    await prismaClient.folder.delete({
      where: {
        id: findFolder.id,
      },
    });

    return { message: "Folder deleted" };
  }
}

export { DeleteFolderService };
