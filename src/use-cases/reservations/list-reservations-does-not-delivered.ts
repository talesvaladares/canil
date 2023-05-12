import { ReservationsRepository } from "@/repositories/reservations-repository";


export class ListReservationsDoesNotDeliveredUseCase {

  constructor(private reservationsRepository: ReservationsRepository) {}

  async execute() {

    const reservations = await this.reservationsRepository.listDoesNotDeliver();

    return { reservations };

  }
}