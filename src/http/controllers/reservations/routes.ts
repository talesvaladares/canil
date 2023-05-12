import { FastifyInstance } from "fastify";
import { register } from "./register";
import { verifyJWT } from "@/http/middlewares/verify-jwt";
import { deliver } from "./deliver";
import { listDelivered } from './list-delivered';
import { listDoesDelivered } from './list-does-delivered';
import { list } from './list'

export async function reservationsRoutes(app: FastifyInstance ) {
  
  // rotas autenticadas
  // o onRequest executa antes do restante da rota
  // verificando se existe um jwt válido
  app.post('/reservations', { onRequest: [verifyJWT] }, register);
  app.patch('/reservations/deliver', { onRequest: [verifyJWT] }, deliver);

  app.get('/reservations', { onRequest: [verifyJWT] }, list);
  app.get('/reservations/delivered', { onRequest: [verifyJWT] }, listDelivered);
  app.get('/reservations/does-not-delivered', { onRequest: [verifyJWT] }, listDoesDelivered);
}