import { PrismaReservationsRepository } from '@/repositories/prisma/prisma-reservations-repository';
import { ListReservationsUseCase } from '../list-reservations';

export function makeListReservationsUseCase() {
  const reserveRepository = new PrismaReservationsRepository();
  const useCase = new ListReservationsUseCase(reserveRepository);

  return useCase;
}