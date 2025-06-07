import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";

import { CreateFolderController } from "./controllers/CreateFolderController";
import { ListFoldersController } from "./controllers/ListFoldersController";

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

  fastify.get(
    "/folders",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListFoldersController().handle(request, reply);
    }
  );
}
