import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateItemService } from "../services/UpdateItemService";

class UpdateItemController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string };
    const { name, checked, link } = request.body as {
      name?: string;
      checked?: boolean;
      link?: string;
    };

    const updateItemService = new UpdateItemService();
    const item = await updateItemService.execute(id, {
      name,
      checked,
      link,
    });

    reply.send(item);
  }
}

export { UpdateItemController };
