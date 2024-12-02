import { useState } from 'react'
import { IGameLifeProps } from './interfaces/IGameLifeProps'
import { createEmptyGrid } from './utils/utils'
import { twMerge } from 'tailwind-merge'

const GameLife: React.FC<IGameLifeProps> = ({ gridConfig }: IGameLifeProps) => {
  const { rows, columns }  = gridConfig
  const [grid, setGrid] = useState<number[][]>(createEmptyGrid(rows, columns))

  return (
    <div className='GameLife'>
      <h1 className='md:text-2xl text-xl'>Conway's Game of Life</h1>
      <div 
        className='grid-display'
        style={{
          display: 'grid',
          gridTemplateRows: `repeat(${rows}, 20px)`,
          gridTemplateColumns: `repeat(${columns}, 20px)`
        }}
      >
        {
          grid.map((rows, rowIndex) => (
            rows.map((col, colIndex) => (
              <button
                key={`${rowIndex}-${colIndex}`}
                className={twMerge(
                  'border border-[#9050e9]',
                  grid[rowIndex][colIndex] 
                    ? 'bg-[#ad7bee]' 
                    : 'bg-[#240643]'
                )}
              >
              </button>
            ))
          ))
        }
      </div>      
    </div>
  ) 
}

export default GameLife