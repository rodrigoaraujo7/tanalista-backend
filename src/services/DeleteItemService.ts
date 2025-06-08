import prismaClient from "../prisma";

class DeleteItemService {
  async execute({ id }: { id: string }) {
    if (!id) {
      throw new Error("Item ID is required");
    }

    const findItem = await prismaClient.item.findFirst({
      where: {
        id,
      },
    });

    if (!findItem) {
      throw new Error("Invalid ID");
    }

    await prismaClient.item.delete({
      where: {
        id: findItem.id,
      },
    });

    return { message: "Item deleted" };
  }
}

export { DeleteItemService };
