import type { Rule } from './Rule'

export type RuleCellState = (liveNeighbors: number, isCellDead: boolean) => boolean