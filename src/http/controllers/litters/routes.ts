import { FastifyInstance } from "fastify";
import { register } from "./register";
import { verifyJWT } from "@/http/middlewares/verify-jwt";
import { verifyUserRolePermissionLevel } from "@/http/middlewares/verify-user-role-permission-level";
import { list } from "./list";

export async function littersRoutes(app: FastifyInstance ) {
  
  // rotas autenticadas
  // o onRequest executa antes do restante da rota
  // verificando se existe um jwt válido
  app.addHook('onRequest', verifyJWT); //pega todas as rotas
  app.post('/litters', { onRequest: [verifyUserRolePermissionLevel({permissionLevel: 2})] }, register);
  app.get('/litters', { onRequest: [verifyUserRolePermissionLevel({permissionLevel: 2})] }, list);
 
}