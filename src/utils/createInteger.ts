import { NotIntegerError } from '../errors/NotIntegerError'

export function createInteger(value: unknown): number {
  if (Number.isInteger(value)) {
    return Number(value)
  } 
  throw new NotIntegerError()
}