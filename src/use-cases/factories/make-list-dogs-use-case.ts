import { PrismaDogRepository } from '@/repositories/prisma/prisma-dogs-repository';
import { ListDogsUseCase } from '../list-dogs';

export function makeListDogsDogUseCase() {
  const dogsRepository = new PrismaDogRepository();
  const useCase = new ListDogsUseCase(dogsRepository);

  return useCase;
}