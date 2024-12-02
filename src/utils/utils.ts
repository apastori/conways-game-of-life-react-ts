export const createEmptyGrid = (rows: number, columns: number) => {
  return Array.from({length: rows}, () => Array(columns).fill(0))
}