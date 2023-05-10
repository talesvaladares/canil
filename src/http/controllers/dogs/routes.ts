import { FastifyInstance } from "fastify";
import { register } from "./register";
import { list } from "./list";

export async function dogsRoutes(app: FastifyInstance ) {
  app.post('/dogs', register);
  app.get('/dogs', list);
}