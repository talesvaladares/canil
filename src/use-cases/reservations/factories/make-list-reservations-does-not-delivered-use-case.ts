import { PrismaReservationsRepository } from '@/repositories/prisma/prisma-reservations-repository';
import { ListReservationsDoesNotDeliveredUseCase } from '../list-reservations-does-not-delivered';

export function makeListReservationsDoesNotDeliveredUseCase() {
  const reserveRepository = new PrismaReservationsRepository();
  const useCase = new ListReservationsDoesNotDeliveredUseCase(reserveRepository);

  return useCase;
}