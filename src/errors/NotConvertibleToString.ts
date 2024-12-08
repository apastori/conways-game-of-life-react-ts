export class NotConvertibleToString extends Error {
  notStringifyValue: unknown
  constructor(value: unknown) {
    // Pass the message to the parent Error class
    super('The Value cannot be string')
    // Set a custom name for the error
    this.name = 'Not Convertible To String'
    this.notStringifyValue = value
    // Set the prototype explicitly for correct inheritance
    Object.setPrototypeOf(this, NotConvertibleToString.prototype)
  }
}