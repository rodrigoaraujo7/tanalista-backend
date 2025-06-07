import { FastifyRequest, FastifyReply } from "fastify";
import { ListFoldersService } from "../services/ListFoldersService";

class ListFoldersController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listFoldersService = new ListFoldersService();

    const folders = await listFoldersService.execute();

    reply.send(folders);
  }
}

export { ListFoldersController };
