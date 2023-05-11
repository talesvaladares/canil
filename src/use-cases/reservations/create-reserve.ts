import { ReservationsRepository } from "@/repositories/reservations-repository";
import { ReserveAlreadyExistsWithDogError } from "./errors/dog-already-exists-error";

interface CreateReserseUseCaseRequest {
  user_id: string;
  dog_id: string;
}

export class CreateReservesUseCase {

  constructor(private reservationsRepository: ReservationsRepository) {}

  async execute({
    dog_id,
    user_id
  }: CreateReserseUseCaseRequest) {

    const reserveExists = await this.reservationsRepository.findByDogId(dog_id);
    
    if (reserveExists) {
      throw new ReserveAlreadyExistsWithDogError(dog_id);
    }

    await this.reservationsRepository.create(user_id, dog_id);

  }
}