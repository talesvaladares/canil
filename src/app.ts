import fastify from "fastify";
import fastifyJwt from '@fastify/jwt';
import fastifyCookie from '@fastify/cookie';
import { ZodError } from "zod";
import { env } from './env';

import { dogsRoutes } from "./http/controllers/dogs/routes";
import { usersRoutes } from "./http/controllers/users/routes";
import { reservationsRoutes } from "./http/controllers/reservations/routes";
import { littersRoutes } from "./http/controllers/litters/routes";

export const app = fastify();

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: 'refreshToken',
    signed: false, // não assinado pelo backend
  },
  sign: {
    expiresIn: '10m', // 10 minutos
  },
});


app.register(fastifyCookie);

app.register(dogsRoutes);
app.register(usersRoutes);
app.register(reservationsRoutes);
app.register(littersRoutes);

app.setErrorHandler((error, _, response) => {
  if (error instanceof ZodError) {
    return response.status(400).send({
      message: 'Validation error.',
      issues: error.format(),
    });
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error);
  } else {
    // TODO: Here we should log to on external tool like DataDog/newRelic/Sentry
  }

  return response.status(500).send({
    message: 'Internal server error',
  });
});