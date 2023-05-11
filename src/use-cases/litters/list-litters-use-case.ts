import { LittersRepository } from "@/repositories/litters-Repository";

export class ListLittersUseCase {

  constructor(private littersRepository: LittersRepository) {}

  async execute() {

    const litters = await this.littersRepository.list();

    return { litters };

  }
}