import prismaClient from "../prisma";

class UpdateFolderService {
  async execute(id: string, data: { title?: string; description?: string }) {
    if (!id) {
      throw new Error("Folder ID is required");
    }

    const folder = await prismaClient.folder.update({
      where: { id },
      data: {
        title: data.title,
        description: data.description,
        updated_at: new Date(),
      },
    });

    return folder;
  }
}

export { UpdateFolderService };
