import { FastifyRequest, FastifyReply } from "fastify";
import { CreateItemService } from "../services/CreateItemService";
import { Item } from "../types/Folder";

class CreateItemController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, folderId, folder, checked, link } = request.body as Item;

    const createItemService = new CreateItemService();
    const item = await createItemService.execute({
      name,
      folderId,
      folder,
      checked,
      link,
    });

    reply.status(201).send(item);
  }
}

export { CreateItemController };
