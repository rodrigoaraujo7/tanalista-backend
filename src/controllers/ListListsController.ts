import { FastifyRequest, FastifyReply } from "fastify";
import { ListListsService } from "../services/ListListsService";

class ListListsController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listsService = new ListListsService();

    const lists = await listsService.execute();

    reply.send(lists);
  }
}

export { ListListsController };
