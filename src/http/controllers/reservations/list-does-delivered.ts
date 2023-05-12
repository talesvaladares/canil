import { FastifyReply, FastifyRequest } from 'fastify';
import { makeListReservationsDoesNotDeliveredUseCase } from '@/use-cases/reservations/factories/make-list-reservations-does-not-delivered-use-case';

export async function listDoesDelivered(
  request: FastifyRequest,
  response: FastifyReply
) {

  try {
    const listReservationsDoesNotDeliveredUseCase = makeListReservationsDoesNotDeliveredUseCase();

    const { reservations } = await listReservationsDoesNotDeliveredUseCase.execute();

    return response.status(201).send({
      reservations
    });
  }
  catch (error) {
    return response.status(500).send();
  }
}