import { z as zod } from 'zod';
import { FastifyReply, FastifyRequest } from 'fastify';
import { makeReserveUseCase } from '@/use-cases/reservations/factories/make-reserve-use-case-case';
import { ReserveAlreadyExistsWithDogError } from '@/use-cases/reservations/errors/dog-already-exists-error';

export async function register(
  request: FastifyRequest,
  response: FastifyReply
) {
  const registerBodySchema = zod.object({
    user_id: zod.string(),
    dog_id: zod.string()
  });

  const {
    dog_id,
    user_id
  } = registerBodySchema.parse(request.body);
   
  try {
    const registerReserveUseCase = makeReserveUseCase();

    await registerReserveUseCase.execute({
      dog_id,
      user_id
    });

    return response.status(201).send();
  }
  catch (error) {
    if (error instanceof ReserveAlreadyExistsWithDogError) {
      
      // 409 é status de conflito
      return response.status(409).send({
        message: error.message,
      });
    }

    return response.status(500).send();
  }
}