import { NotPositiveIntegerError } from '../errors/NotPositiveIntegerError'
import { NonNegativeInteger } from '../types/NonNegativeInteger'

export function createNonNegativeInteger(value: number): NonNegativeInteger {
  if (!Number.isInteger(value) || value < 0) {
    throw new NotPositiveIntegerError(value)
  }
  return value as NonNegativeInteger
}