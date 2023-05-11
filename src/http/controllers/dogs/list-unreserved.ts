import { FastifyReply, FastifyRequest } from 'fastify';
import { makeListUnreservedDogsDogUseCase } from '@/use-cases/dogs/factories/make-list-unreserved-dogs-use-case copy';

export async function listUnreserved(
  request: FastifyRequest,
  response: FastifyReply
) {
 
  try {
    
    const listUnreservedDogsUseCase = makeListUnreservedDogsDogUseCase();

    const { dogs } = await  listUnreservedDogsUseCase.execute();

    return response.status(200).send({
      dogs
    });
  }
  catch (error) {

    return response.status(500).send();
  }
}