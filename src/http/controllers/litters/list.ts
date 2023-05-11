import { FastifyReply, FastifyRequest } from 'fastify';
import { makeListLitterrUseCase } from '@/use-cases/litters/factories/make-list-litters-use-case';

export async function list(
  request: FastifyRequest,
  response: FastifyReply
) {
   
  try {
    const listLittersUseCase = makeListLitterrUseCase();

    const { litters } = await listLittersUseCase.execute();

    return response.status(201).send({litters});
  }
  catch (error) {


    return response.status(500).send();

  }
}