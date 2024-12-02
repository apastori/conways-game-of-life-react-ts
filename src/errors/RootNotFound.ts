export class RootNotFound extends Error {
  constructor() {
    // Pass the message to the parent Error class
    super('No element with id "root" was found in DOM, React App Cannot Render')
    // Set a custom name for the error
    this.name = 'Root Not Found'
    // Set the prototype explicitly for correct inheritance
    Object.setPrototypeOf(this, RootNotFound.prototype)
  }
}