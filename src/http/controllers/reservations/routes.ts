import { FastifyInstance } from "fastify";
import { register } from "./register";
import { verifyJWT } from "@/http/middlewares/verify-jwt";
import { verifyUserRolePermissionLevel } from '../../middlewares/verify-user-role-permission-level'
import { deliver } from "./deliver";
import { listDelivered } from './list-delivered';
import { listDoesDelivered } from './list-does-delivered';
import { list } from './list'

export async function reservationsRoutes(app: FastifyInstance ) {
  
  // rotas autenticadas
  // o onRequest executa antes do restante da rota
  // verificando se existe um jwt válido
  app.post('/reservations', { onRequest: [verifyJWT] }, register);
  app.patch('/reservations/deliver', { onRequest: [verifyJWT, verifyUserRolePermissionLevel({permissionLevel: 2})] }, deliver);

  app.get('/reservations', { onRequest: [verifyJWT, verifyUserRolePermissionLevel({permissionLevel: 2})] }, list);
  app.get('/reservations/delivered', { onRequest: [verifyJWT, verifyUserRolePermissionLevel({permissionLevel: 2})] }, listDelivered);
  app.get('/reservations/does-not-delivered', { onRequest: [verifyJWT, verifyUserRolePermissionLevel({permissionLevel: 2})] }, listDoesDelivered);
}