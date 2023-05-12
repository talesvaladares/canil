import { prisma } from '@/lib/prisma';
import { Reserve } from '@prisma/client';
import { ReservationsRepository } from '../reservations-repository';

export class PrismaReservationsRepository implements ReservationsRepository {

  async create(user_id: string, dog_id: string): Promise<Reserve> {

    const reserve = await prisma.reserve.create({
      data: {
        dog_id,
        user_id
      }
    });

    return reserve
  }

  async findByDogId(dog_id: string): Promise<Reserve | null> {
    
    const  reserve = await prisma.reserve.findFirst({
      where: {
        dog_id: dog_id
      }
    });

    return reserve;
  }

  async deliver(reserve_id: string): Promise<void> {
    
    await prisma.reserve.update({
      where: {
        id: reserve_id
      },
      data: {
        delivered: new Date()
      }
    });
  }

  async list(): Promise<Reserve[]> {
    const reservations =  await prisma.reserve.findMany();

    return reservations;
  }

  async listDelivered(): Promise<Reserve[]> {
    const reservations =  await prisma.reserve.findMany({
      where: {
        delivered: {
          not: null
        }
      }
    });

    return reservations;
  }

  async listDoesNotDeliver(): Promise<Reserve[]> {
    const reservations =  await prisma.reserve.findMany({
      where: {
        delivered: null
      }
    });

    return reservations;
  }
}