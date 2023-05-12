import { PrismaReservationsRepository } from '@/repositories/prisma/prisma-reservations-repository';
import { ListReservationsDeliveredUseCase } from '../list-reservations-delivered';

export function makeListReservationsDeliveredUseCase() {
  const reserveRepository = new PrismaReservationsRepository();
  const useCase = new ListReservationsDeliveredUseCase(reserveRepository);

  return useCase;
}