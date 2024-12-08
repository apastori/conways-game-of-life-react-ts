export class NotPositiveIntegerError extends Error {
  constructor() {
    // Pass the message to the parent Error class
    super('Value must be a non-negative integer')
    // Set a custom name for the error
    this.name = 'Not Positive Integer'
    // Set the prototype explicitly for correct inheritance
    Object.setPrototypeOf(this, NotPositiveIntegerError.prototype)
  }
}