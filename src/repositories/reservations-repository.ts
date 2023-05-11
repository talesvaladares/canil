import { Reserve, Prisma } from '@prisma/client';


export interface ReservationsRepository {
  create(user_id: string, dog_id: string): Promise<Reserve>;
  findByDogId(dog_id: string): Promise<Reserve | null>;  
}