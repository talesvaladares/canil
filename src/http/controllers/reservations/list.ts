import { FastifyReply, FastifyRequest } from 'fastify';
import { makeListReservationsUseCase } from '@/use-cases/reservations/factories/make-list-reservations-use-case';

export async function list(
  request: FastifyRequest,
  response: FastifyReply
) {

  try {
    const listReservationsUseCase = makeListReservationsUseCase();

    const { reservations } = await listReservationsUseCase.execute();

    return response.status(201).send({
      reservations
    });
  }
  catch (error) {
    return response.status(500).send();
  }
}