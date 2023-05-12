import { FastifyReply, FastifyRequest } from 'fastify';
import { makeListReservationsDeliveredUseCase } from '@/use-cases/reservations/factories/make-list-reservations-delivered-use-case';

export async function listDelivered(
  request: FastifyRequest,
  response: FastifyReply
) {

  try {
    const listReservationsDeliveredUseCase = makeListReservationsDeliveredUseCase();

    const { reservations } = await listReservationsDeliveredUseCase.execute();

    return response.status(201).send({
      reservations
    });
  }
  catch (error) {
    return response.status(500).send();
  }
}