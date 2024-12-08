import { toStringSafe } from '../utils/toStringSafe'

export class NotPositiveIntegerError extends Error {
  constructor(value: unknown) {
    // Pass the message to the parent Error class
    super(`Value must be a non-negative integer, is ${toStringSafe(value)}`)
    // Set a custom name for the error
    this.name = 'Not Positive Integer'
    // Set the prototype explicitly for correct inheritance
    Object.setPrototypeOf(this, NotPositiveIntegerError.prototype)
  }
}