import { PrismaReservationsRepository } from '@/repositories/prisma/prisma-reservations-repository';
import { DeliverDogUseCase } from '../delivered-dog';

export function makeDeliverDogUseCase() {
  const reserveRepository = new PrismaReservationsRepository();
  const useCase = new DeliverDogUseCase(reserveRepository);

  return useCase;
}