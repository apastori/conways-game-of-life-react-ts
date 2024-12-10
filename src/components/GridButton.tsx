import React from 'react'
import { twMerge } from 'tailwind-merge'
import { IGridButtonProps } from '../interfaces/IGridButtonProps'

const GridButton: React.FC<IGridButtonProps> = ({
  rowIndex,
  colIndex,
  isActive,
  handleMouseDown,
  handleMouseUp,
  handleMouseEnter,
  toggleCellState,
}) => {
  return (
    <React.Fragment>
      <button
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
        onClick={() => toggleCellState(rowIndex, colIndex)}
        className={twMerge(
          'border border-[#9050e9]',
          isActive ? 'bg-[#ad7bee]' : 'bg-[#240643]'
        )}
      >
      </button>
    </React.Fragment>
  )
}

export default GridButton