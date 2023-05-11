import { DogsRepository } from "@/repositories/dogs-repository";

export class ListUnreservedDogsUseCase {

  constructor(private dogsRepository: DogsRepository) {}

  async execute() {

    const dogs = await this.dogsRepository.listUnreserved();

    return { dogs };

  }
}