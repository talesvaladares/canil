import { LittersRepository, LitterUseCaseRequest } from "@/repositories/litters-Repository";
import { ParentsWithEqualIDsError } from "./errors/parents-with-equal-ids-error";

export class RegisterLitterUseCase {

  constructor(private littersRepository: LittersRepository) {}

  async execute({
    birth,
    females,
    males,
    mother_id,
    father_id,
    dogs
  }: LitterUseCaseRequest) {

    if (mother_id === father_id) {
      throw new ParentsWithEqualIDsError();
    }
  
    const litter = await this.littersRepository.create({
      birth,
      females,
      males,
      mother_id,
      father_id,
      dogs 
    });

    return { litter };
  
   
  }
}