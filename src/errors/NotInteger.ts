export class NotIntegerError extends Error {
  constructor() {
    // Pass the message to the parent Error class
    super('The Value is Not Integer')
    // Set a custom name for the error
    this.name = 'Not Integer'
    // Set the prototype explicitly for correct inheritance
    Object.setPrototypeOf(this, NotIntegerError.prototype)
  }
}