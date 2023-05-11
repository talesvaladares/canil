import { PrismaLittersRepository } from '@/repositories/prisma/prisma-litters-repository';
import { RegisterLitterUseCase } from '../register-litter-use-case'

export function makeRegisterLitterUseCase() {
  const littersRepository = new PrismaLittersRepository();
  const useCase = new RegisterLitterUseCase(littersRepository);

  return useCase;
}