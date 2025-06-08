import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateFolderService } from "../services/UpdateFolderService";

class UpdateFolderController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string };
    const { title, description } = request.body as {
      title?: string;
      description?: string;
    };

    const updateFolderService = new UpdateFolderService();
    const folder = await updateFolderService.execute(id, {
      title,
      description,
    });

    reply.send(folder);
  }
}

export { UpdateFolderController };
