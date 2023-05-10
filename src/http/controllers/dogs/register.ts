import { z as zod } from 'zod';
import { FastifyReply, FastifyRequest } from 'fastify';
import { makeRegisterDogUseCase } from '@/use-cases/factories/make-dog-use-case';
import { DogAlreadyExistsError } from '@/use-cases/errors/dog-already-exists-error';

export async function register(
  request: FastifyRequest,
  response: FastifyReply
) {
  const registerBodySchema = zod.object({
    name: zod.string(),
    sex: zod.enum(['male', 'female']),
    color: zod.string(),
    birth: zod.date().nullable(),
    microchip: zod.string().nullable(),
    price: zod.number(),
    breeder: zod.boolean().default(false),
    race: zod.string()
  });

  const {
    birth,
    breeder,
    color,
    microchip,
    name,
    price,
    sex,
    race
   } = registerBodySchema.parse(request.body);
   
  try {
    const registerUseCase = makeRegisterDogUseCase();

    await registerUseCase.execute({
      birth,
      breeder,
      color,
      microchip,
      name,
      price,
      sex,
      race
    });

    return response.status(201).send();
  }
  catch (error) {
    if (error instanceof DogAlreadyExistsError) {
      
      // 409 é status de conflito
      return response.status(409).send({
        message: error.message,
      });
    }

    return response.status(500).send();
  }
}