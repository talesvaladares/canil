import { ReservationsRepository } from "@/repositories/reservations-repository";


export class ListReservationsDeliveredUseCase {

  constructor(private reservationsRepository: ReservationsRepository) {}

  async execute() {

    const reservations = await this.reservationsRepository.listDelivered();

    return { reservations };

  }
}