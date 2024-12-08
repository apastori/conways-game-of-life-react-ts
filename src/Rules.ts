import { IRules } from './interfaces/IRules'
import type { Rule } from './types/Rule'
import { RuleCellState } from './types/RuleCellState'

// Rules for a Cell to turn off

const underPopulation: Rule = (liveNeighbors: number): boolean => {
  return liveNeighbors < 2
}

const overPopulation: Rule = (liveNeighbors: number): boolean => {
  return liveNeighbors > 3
}

//Rules for a Cell to turn on

const reproduction: RuleCellState = (liveNeighbors: number, isCellDead: boolean): boolean => {
  return isCellDead && liveNeighbors === 3
}
  
const survival: Rule = (liveNeighbors: number): boolean => {
  return liveNeighbors === 2 || liveNeighbors === 3
}

export const Rules: IRules = {
  'underPopulation': underPopulation,
  'overPopulation': overPopulation,
  'reproduction': reproduction,
  'survival': survival   
}