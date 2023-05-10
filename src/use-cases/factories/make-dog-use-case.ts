import { PrismaDogRepository } from '@/repositories/prisma/prisma-dogs-repository';
import { CreateDogUseCase } from '../create-dog';

export function makeRegisterDogUseCase() {
  const dogsRepository = new PrismaDogRepository();
  const useCase = new CreateDogUseCase(dogsRepository);

  return useCase;
}