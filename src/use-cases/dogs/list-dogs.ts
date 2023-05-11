import { DogsRepository } from "@/repositories/dogs-repository";

export class ListDogsUseCase {

  constructor(private dogsRepository: DogsRepository) {}

  async execute() {

    const dogs = await this.dogsRepository.list();

    return { dogs };

  }
}