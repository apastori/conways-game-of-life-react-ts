import { BooleanNumber } from '../types/BooleanNumberType'

export interface IGridButtonProps {
  rowIndex: number,
  colIndex: number
  isActive: BooleanNumber,
  handleMouseDown: () => void,
  handleMouseUp: () => void,
  handleMouseEnter: (row: number, col: number) => void,
  toggleCellState: (rowToToggle: number, columnToToggle: number) => void
}