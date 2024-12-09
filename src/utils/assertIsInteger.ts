import { isInteger } from '../types/isIntegerType'
import { NotIntegerError } from '../errors/NotIntegerError'

function assertIsInteger<T extends number>(value: T): asserts value is isInteger<T> {
  if (!Number.isInteger(value)) {
    throw new NotIntegerError()
  }
}

export { assertIsInteger }