import { z as zod } from 'zod';
import { FastifyReply, FastifyRequest } from 'fastify';
import { makeRegisterLitterUseCase } from '@/use-cases/litters/factories/make-register-lliter-use-case';
import { ParentsWithEqualIDsError } from '@/use-cases/litters/errors/parents-with-equal-ids-error';

export async function register(
  request: FastifyRequest,
  response: FastifyReply
) {
  const registerBodySchema = zod.object({
    birth: zod.string(),
    father_id: zod.string(),
    mother_id: zod.string(),
    females: zod.number(),
    males: zod.number(),
    dogs: zod.array(zod.string())
  });

  const {
    birth,
    dogs,
    father_id,
    mother_id,
    females,
    males
   } = registerBodySchema.parse(request.body);
   
  try {
    const registerLitterUseCase = makeRegisterLitterUseCase();

    

    await registerLitterUseCase.execute({
      birth: new Date(birth),
      dogs,
      father_id,
      mother_id,
      females,
      males
    });

    return response.status(201).send();
  }
  catch (error) {
    
    if (error instanceof ParentsWithEqualIDsError) {
      // 409 é status de conflito
      return response.status(409).send({
       message: error.message,
     });
   }

   return response.status(500).send();
  }
}