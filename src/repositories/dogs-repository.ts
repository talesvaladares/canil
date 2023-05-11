import { Dog, Prisma } from '@prisma/client';

export interface DogsRepository {
  create(data: Prisma.DogCreateInput): Promise<Dog>;
  list(): Promise<Dog[]>
  findByMicrochip(michochip: string) : Promise<Dog | null>
  listUnreserved() : Promise<Dog[]>
  listReserved(): Promise<Dog[]>
  findById(dog_id: string): Promise<Dog | null>
}