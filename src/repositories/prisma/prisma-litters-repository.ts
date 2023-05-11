import { prisma } from '@/lib/prisma';
import { Litter } from '@prisma/client';
import { LitterUseCaseRequest, LittersRepository } from '../litters-Repository';

export class PrismaLittersRepository implements LittersRepository {

  async create({ birth, dogs, father_id, females, males, mother_id }: LitterUseCaseRequest): Promise<Litter | null> {
          
    try {
      const litter = await prisma.litter.create({
        data: {
          birth,
          females,
          males,
          mother_id,
          father_id,
          dogs: {
            connect: dogs.map(dog => ({id: dog}))
          }
        }
      });
  
      return litter; 
    }
    catch (error) {
      console.log(error)

      return null
    }
  }

  async list(): Promise<Litter[]> {
    const litters = await prisma.litter.findMany({
      include: {
        dogs: true
      }
    });

    return litters;
  }

}