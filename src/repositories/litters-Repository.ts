import { Litter, Prisma } from '@prisma/client';

export type LitterUseCaseRequest = {
  birth: Date;
  females: number;
  males: number;
  mother_id: string;
  father_id: string;
  dogs: string[]
}

export interface LittersRepository {
  create(data: LitterUseCaseRequest) : Promise<Litter | null>
  list(): Promise<Litter[]>
}