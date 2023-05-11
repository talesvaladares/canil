import { DogsRepository } from "@/repositories/dogs-repository";

export class ListReservedDogsUseCase {

  constructor(private dogsRepository: DogsRepository) {}

  async execute() {

    const dogs = await this.dogsRepository.listReserved();

    return { dogs };

  }
}