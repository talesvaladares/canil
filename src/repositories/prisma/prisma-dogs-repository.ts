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
    const dogs = await prisma.dog.findMany();

    return dogs
  }

  async findByMicrochip(michochip: string): Promise<Dog | null> {
    
    const dog = await prisma.dog.findUnique({
      where: {
        microchip: michochip
      }
    });

    return dog;
  }

  async listUnreserved(): Promise<Dog[]> {
    const dogs = await prisma.dog.findMany({
      where: {
        reserve: null
      }
    })

    return dogs
  }

  async findById(dog_id: string): Promise<Dog | null> {
    const dog = await prisma.dog.findUnique({
      where: {
        id: dog_id
      }
    });

    return dog
  }

  async listReserved(): Promise<Dog[]> {
    const dogs = await prisma.dog.findMany({
      where: {
        reserve: {
          isNot: null
        }
      },
      include: {
        reserve: {
          include: {
            User: {
              select: {
                id: true,
                name: true,
                email: true
              }
            }
          }
        }
      }
    });

    return dogs
  }

}