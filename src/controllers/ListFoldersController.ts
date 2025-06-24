import { FastifyRequest, FastifyReply } from "fastify";
import { ListFoldersService } from "../services/ListFoldersService";

class ListFoldersController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { listId } = request.query as { listId: string };

    const listFoldersService = new ListFoldersService();

    const folders = await listFoldersService.execute(listId);

    reply.send(folders);
  }
}

export { ListFoldersController };
