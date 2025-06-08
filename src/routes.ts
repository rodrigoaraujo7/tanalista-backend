import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";

import { CreateFolderController } from "./controllers/CreateFolderController";
import { ListFoldersController } from "./controllers/ListFoldersController";
import { DeleteFolderController } from "./controllers/DeleteFolderController";
import { CreateItemController } from "./controllers/CreateItemController";

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

  fastify.delete(
    "/folder",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteFolderController().handle(request, reply);
    }
  );

  fastify.post(
    "/item",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateItemController().handle(request, reply);
    }
  );
}
