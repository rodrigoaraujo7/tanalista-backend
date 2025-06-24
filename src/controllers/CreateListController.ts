import { FastifyRequest, FastifyReply } from "fastify";
import { CreateListService } from "../services/CreateListService";
import { List } from "../types/Folder";

class CreateListController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id, title, folders } = request.body as List;

    const listService = new CreateListService();

    const list = await listService.execute({
      id,
      title,
      folders,
    });

    reply.send(list);
  }
}

export { CreateListController };
