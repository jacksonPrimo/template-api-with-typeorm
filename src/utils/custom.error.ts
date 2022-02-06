export class CustomError {
  constructor(
    public code: number,
    public details: string,
  ) {
    this.code = code;
    this.details = details;
  }
}
