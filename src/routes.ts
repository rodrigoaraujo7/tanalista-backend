import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";

import { CreateFolderController } from "./controllers/CreateFolderController";
import { ListFoldersController } from "./controllers/ListFoldersController";
import { DeleteFolderController } from "./controllers/DeleteFolderController";
import { UpdateFolderController } from "./controllers/UpdateFolderController";
import { CreateItemController } from "./controllers/CreateItemController";
import { DeleteItemController } from "./controllers/DeleteItemController";
import { UpdateItemController } from "./controllers/UpdateItemController";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  // folders routes
  fastify.get(
    "/folders",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListFoldersController().handle(request, reply);
    }
  );

  fastify.post(
    "/folder",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateFolderController().handle(request, reply);
    }
  );

  fastify.delete(
    "/folder",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteFolderController().handle(request, reply);
    }
  );

  fastify.put(
    "/folder",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new UpdateFolderController().handle(request, reply);
    }
  );

  // items routes
  fastify.post(
    "/item",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateItemController().handle(request, reply);
    }
  );

  fastify.delete(
    "/item",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteItemController().handle(request, reply);
    }
  );

  fastify.put("/item", async (request: FastifyRequest, reply: FastifyReply) => {
    return new UpdateItemController().handle(request, reply);
  });
}
