import { ReservationsRepository } from "@/repositories/reservations-repository";

export class ListReservationsUseCase {

  constructor(private reservationsRepository: ReservationsRepository) {}

  async execute() {

    const reservations = await this.reservationsRepository.list();

    return { reservations };

  }
}