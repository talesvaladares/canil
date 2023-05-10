import { prisma } from '@/lib/prisma';
import { Prisma, Dog } from '@prisma/client';
import { DogsRepository } from '../dogs-repository';

export class PrismaDogRepository implements DogsRepository {

  async create(data: Prisma.DogCreateInput) {

    const dog = await prisma.dog.create({
      data
    });

    return dog
  }

  async list(): Promise<Dog[]> {
    const dogs = prisma.dog.findMany();

    return dogs
  }

  async findByMicrochip(michochip: string): Promise<Dog | null> {
    
    const dog = prisma.dog.findUnique({
      where: {
        microchip: michochip
      }
    });

    return dog;
  }
}