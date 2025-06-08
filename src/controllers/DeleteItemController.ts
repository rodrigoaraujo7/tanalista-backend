import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteItemService } from "../services/DeleteItemService";

class DeleteItemController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string };
    const deleteItemService = new DeleteItemService();

    const item = await deleteItemService.execute({ id });

    reply.send(item);
  }
}

export { DeleteItemController };
