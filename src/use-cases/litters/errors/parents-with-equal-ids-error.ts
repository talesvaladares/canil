export class ParentsWithEqualIDsError extends Error {
  constructor() {
    super('Parents with equal IDs.');
  }
}