import fastify from "fastify";
import { dogsRoutes } from "./http/controllers/dogs/routes";
import { ZodError } from "zod";
import { env } from './env';

export const app = fastify();

app.register(dogsRoutes);

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