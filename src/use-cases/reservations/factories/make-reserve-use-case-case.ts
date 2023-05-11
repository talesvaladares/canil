import { PrismaReservationsRepository } from '@/repositories/prisma/prisma-reservations-repository';
import { CreateReservesUseCase } from '../create-reserve';

export function makeReserveUseCase() {
  const reserveRepository = new PrismaReservationsRepository();
  const useCase = new CreateReservesUseCase(reserveRepository);

  return useCase;
}