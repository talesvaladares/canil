import { PrismaDogRepository } from '@/repositories/prisma/prisma-dogs-repository';
import { ListReservedDogsUseCase } from '../list-reserved-dogs';

export function makeListReservedDogsDogUseCase() {
  const dogsRepository = new PrismaDogRepository();
  const useCase = new ListReservedDogsUseCase(dogsRepository);

  return useCase;
}