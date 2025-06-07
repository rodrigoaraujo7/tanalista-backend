import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteFolderService } from "../services/DeleteFolderService";

class DeleteFolderController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string };
    const folderService = new DeleteFolderService();

    const folder = await folderService.execute({ id });

    reply.send(folder);
  }
}

export { DeleteFolderController };
