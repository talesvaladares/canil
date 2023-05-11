import { PrismaDogRepository } from '@/repositories/prisma/prisma-dogs-repository';
import { ListUnreservedDogsUseCase } from '../list-unreserved-dogs';

export function makeListUnreservedDogsDogUseCase() {
  const dogsRepository = new PrismaDogRepository();
  const useCase = new ListUnreservedDogsUseCase(dogsRepository);

  return useCase;
}