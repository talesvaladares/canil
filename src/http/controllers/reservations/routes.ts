import { FastifyInstance } from "fastify";
import { register } from "./register";
import { verifyJWT } from "@/http/middlewares/verify-jwt";

export async function reservationsRoutes(app: FastifyInstance ) {
  
  // rotas autenticadas
  // o onRequest executa antes do restante da rota
  // verificando se existe um jwt válido
  app.post('/reservations', { onRequest: [verifyJWT] }, register);
}