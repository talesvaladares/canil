export class DogAlreadyExistsError extends Error {
  constructor() {
    super('Microchip already exists.');
  }
}