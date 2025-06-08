import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateItemService } from "../services/UpdateItemService";

class UpdateItemController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string };
    const { name, checked } = request.body as {
      name?: string;
      checked?: boolean;
    };

    const updateItemService = new UpdateItemService();
    const item = await updateItemService.execute(id, {
      name,
      checked,
    });

    reply.send(item);
  }
}

export { UpdateItemController };
