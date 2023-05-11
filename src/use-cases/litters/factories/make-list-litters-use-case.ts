import { PrismaLittersRepository } from '@/repositories/prisma/prisma-litters-repository';
import { ListLittersUseCase } from '../list-litters-use-case'

export function makeListLitterrUseCase() {
  const littersRepository = new PrismaLittersRepository();
  const useCase = new ListLittersUseCase(littersRepository);

  return useCase;
}