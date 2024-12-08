import { Grid } from '../types/GridType'

export const createEmptyGrid = (rows: number, columns: number): Grid => {
  return Array.from({length: rows}, () => Array(columns).fill(0))
}