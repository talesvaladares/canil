import { FastifyReply, FastifyRequest } from 'fastify';
import { makeListReservedDogsDogUseCase } from '@/use-cases/dogs/factories/make-list-reserved-dogs-use-case';

export async function listReserved(
  request: FastifyRequest,
  response: FastifyReply
) {
 
  try {
    
    const listReservedDogsUseCase = makeListReservedDogsDogUseCase();

    const { dogs } = await  listReservedDogsUseCase.execute();

    return response.status(200).send({
      dogs
    });
  }
  catch (error) {

    return response.status(500).send();
  }
}