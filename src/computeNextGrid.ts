import { Directions } from './Directions'
import { GridConfig } from './GridConfig'
import { Rules } from './Rules'
import type { Grid } from './types/GridType'
import type { isInteger } from './types/isIntegerType'
import { BooleanNumber } from './types/BooleanNumberType'
import { NonNegativeInteger } from './types/NonNegativeInteger'
import { createInteger } from './utils/createInteger'
import { createNonNegativeInteger } from './utils/createNonNegativeInteger'

export function computeNextGrid(currentGrid: Grid): Grid {
  const newGrid: Grid = currentGrid.map((arr) => [...arr])
  for (let row: isInteger<0> = 0; row < GridConfig.rows; row++) {
    for (let col: isInteger<0.0> = 0; col < GridConfig.columns; col++) {
      let liveNeighbors: NonNegativeInteger = createNonNegativeInteger(0)
      Object.values(Directions).forEach(([directionX, directionY]) => {
        const neighborRow: number = createInteger(row + directionX)
        const neighborCol: number = createInteger(col + directionY)
        if (
          neighborRow >= 0 &&
          neighborRow < GridConfig.rows &&
          neighborCol >= 0 &&
          neighborCol < GridConfig.columns
        ) {
          liveNeighbors = createNonNegativeInteger(
            liveNeighbors + (currentGrid[neighborRow][neighborCol] ? 1 : 0 as BooleanNumber)
          )
        }
      })
      if (Rules.underPopulation(liveNeighbors) || Rules.overPopulation(liveNeighbors)) {
        newGrid[row][col] = 0
      }
      const isCellDead: boolean = currentGrid[row][col] === 0
      if (Rules.reproduction(liveNeighbors, isCellDead)) {
        newGrid[row][col] = 1
      }
    }
  }
  return newGrid
}
