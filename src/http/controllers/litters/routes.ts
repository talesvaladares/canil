import { FastifyInstance } from "fastify";
import { register } from "./register";
import { verifyJWT } from "@/http/middlewares/verify-jwt";
import { verifyUserRole } from "@/http/middlewares/very-user-role";
import { list } from "./list";

export async function littersRoutes(app: FastifyInstance ) {
  
  // rotas autenticadas
  // o onRequest executa antes do restante da rota
  // verificando se existe um jwt válido
  app.addHook('onRequest', verifyJWT); //pega todas as rotas
  app.post('/litters', { onRequest: [verifyJWT, verifyUserRole('ADMIN')] }, register);
  app.get('/litters', { onRequest: [verifyJWT, verifyUserRole('ADMIN')] }, list);
 
}