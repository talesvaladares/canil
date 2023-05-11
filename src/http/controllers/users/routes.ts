import { FastifyInstance } from 'fastify';
import { register } from './register';
import { refresh } from './refresh';
import { authenticate } from './authenticate';
// import { profile } from './profile';
// import { verifyJWT } from '@/http/middlewares/verify-jwt';

export async function usersRoutes(app: FastifyInstance) {
  
  app.post('/users', register);
  app.post('/sessions', authenticate);

  app.patch('/token/refresh', refresh);
  // rotas autenticadas
  // o onRequest executa antes do restante da rota
  // verificando se existe um jwt válido
  //app.get('/me', { onRequest: [verifyJWT] }, profile);
}