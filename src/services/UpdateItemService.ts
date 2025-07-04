import prismaClient from "../prisma";

class UpdateItemService {
  async execute(
    id: string,
    data: { name?: string; checked?: boolean; link?: string }
  ) {
    if (!id) {
      throw new Error("Item ID is required");
    }

    const item = await prismaClient.item.update({
      where: { id },
      data: {
        name: data.name,
        checked: data.checked,
        link: data.link,
        updated_at: new Date(),
      },
    });

    return item;
  }
}

export { UpdateItemService };
