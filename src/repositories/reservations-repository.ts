import { Reserve } from '@prisma/client';


export interface ReservationsRepository {
  create(user_id: string, dog_id: string): Promise<Reserve>;
  findByDogId(dog_id: string): Promise<Reserve | null>;
  deliver(reserve_id: string): Promise<void>;
  list(): Promise<Reserve[]>;
  listDoesNotDeliver(): Promise<Reserve[]>;
  listDelivered(): Promise<Reserve[]>;  
}