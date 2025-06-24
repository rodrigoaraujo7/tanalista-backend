import { FastifyRequest, FastifyReply } from "fastify";
import { CreateFolderService } from "../services/CreateFolderService";
import { Folder } from "../types/Folder";

class CreateFolderController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { title, description, items, listId, list } = request.body as Folder;

    const folderService = new CreateFolderService();

    const folder = await folderService.execute({
      title,
      description,
      items,
      listId,
      list,
    });

    reply.send(folder);
  }
}

export { CreateFolderController };
