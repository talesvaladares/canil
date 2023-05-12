import { ReservationsRepository } from "@/repositories/reservations-repository";

interface DeliverDogUseCaseRequest {
  reserve_id: string;
}

export class DeliverDogUseCase {

  constructor(private reservationsRepository: ReservationsRepository) {}

  async execute({
    reserve_id
  }: DeliverDogUseCaseRequest) {

    await this.reservationsRepository.deliver(reserve_id);

  }
}