import { DogsRepository } from "@/repositories/dogs-repository";
import { DogAlreadyExistsError } from "./errors/dog-already-exists-error";

type Sex = 'male' | 'female';

interface CreateDogUseCaseRequest {
  name: string | null;
  sex: Sex;
  race: string;
  color: string;
  birth: Date | null;
  microchip: string | null;
  price: number;
  breeder: boolean;
}

export class CreateDogUseCase {

  constructor(private dogsRepository: DogsRepository) {}

  async execute({
    sex,
    birth,
    breeder,
    color,
    microchip,
    name,
    price,
    race
  }: CreateDogUseCaseRequest) {

    if (microchip) {
      
      const dogWithSameMicrochip = await this.dogsRepository.findByMicrochip(microchip);

      if (dogWithSameMicrochip) {
        throw new DogAlreadyExistsError();
      }

      const dog = await this.dogsRepository.create({
        sex,
        birth,
        breeder,
        color,
        microchip,
        name,
        price,
        race
      });

      return { dog };

    }
    else {
      const dog = await this.dogsRepository.create({
        sex,
        birth,
        breeder,
        color,
        microchip,
        name,
        price,
        race
      });

      return { dog };
    }

  }
}