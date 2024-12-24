import { BooleanNumber } from '../types/BooleanNumberType'

export const isGridNoLivingCell: (grid: BooleanNumber[][]) => boolean = (grid: BooleanNumber[][]): boolean => {
  return grid.every(row => row.every(cell => cell === 0))
}