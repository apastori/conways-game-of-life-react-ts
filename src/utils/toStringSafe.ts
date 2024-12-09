import { NotConvertibleToStringError } from '../errors/NotConvertibleToStringError'

export function toStringSafe(value: unknown): string {
  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
    return String(value)
  } 
  if (value && typeof value === 'object') {
    return JSON.stringify(value) // Converts objects and arrays to strings
  } 
  throw new NotConvertibleToStringError(value)
}