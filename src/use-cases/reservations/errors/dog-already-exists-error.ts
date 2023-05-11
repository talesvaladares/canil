export class ReserveAlreadyExistsWithDogError extends Error {
  constructor(dog_id: string) {
    super(`The dog with the ${dog_id} is already registered`);
  }
}