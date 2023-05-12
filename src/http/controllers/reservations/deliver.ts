import { z as zod } from 'zod';
import { FastifyReply, FastifyRequest } from 'fastify';
import { makeDeliverDogUseCase } from '@/use-cases/reservations/factories/make-deliver-dog-use-case';

export async function deliver(
  request: FastifyRequest,
  response: FastifyReply
) {
  
  const deliverDogBodySchema = zod.object({
    reserve_id: zod.string(),
  });

  const {
    reserve_id
  } = deliverDogBodySchema.parse(request.body);
   
  try {
    const deliverDogUseCase = makeDeliverDogUseCase();

    await deliverDogUseCase.execute({
      reserve_id
    });

    return response.status(201).send();
  }
  catch (error) {
    return response.status(500).send();
  }
}