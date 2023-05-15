import { FastifyInstance } from "fastify";
import { register } from "./register";
import { list } from "./list";
import { listUnreserved } from "./list-unreserved";
import { listReserved } from "./list-reserved";
import { verifyJWT } from "@/http/middlewares/verify-jwt";
import { verifyUserRolePermissionLevel } from "@/http/middlewares/verify-user-role-permission-level";

export async function dogsRoutes(app: FastifyInstance ) {
  
  app.get('/dogs/unreserved', listUnreserved);
  
  // rotas autenticadas
  // o onRequest executa antes do restante da rota
  // verificando se existe um jwt válido
  //app.addHook('onRequest', verifyJWT); //pega todas as rotas
  
  app.get('/dogs', { onRequest: [verifyJWT, verifyUserRolePermissionLevel({permissionLevel: 2})] }, list);
  app.get('/dogs/reserved', { onRequest: [verifyJWT, verifyUserRolePermissionLevel({permissionLevel: 2})] }, listReserved);
  
  app.post('/dogs', { onRequest: [verifyJWT, verifyUserRolePermissionLevel({permissionLevel: 2})] },  register);
}