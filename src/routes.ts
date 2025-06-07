import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { CreateFolderController } from "./controllers/CreateFolderController";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.post(
    "/folder",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateFolderController().handle(request, reply);
    }
  );
}
