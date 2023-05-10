import { FastifyReply, FastifyRequest } from 'fastify';
import { makeListDogsDogUseCase } from '@/use-cases/factories/make-list-dogs-use-case';

export async function list(
  request: FastifyRequest,
  response: FastifyReply
) {
 
  try {
    
    const listDogsUseCase = makeListDogsDogUseCase();

    const { dogs } = await  listDogsUseCase.execute();

    return response.status(200).send({
      dogs
    });
  }
  catch (error) {

    return response.status(500).send();
  }
}