import { useRef, useState } from 'react'
import { IGameLifeProps } from './interfaces/IGameLifeProps'
import { Grid } from './types/GridType'
import { createEmptyGrid } from './utils/utils'
import { twMerge } from 'tailwind-merge'
import { PlayPauseButton } from './components/PlayPauseButton'

const GameLife: React.FC<IGameLifeProps> = ({ gridConfig }: IGameLifeProps) => {
  const { rows, columns }: { rows: number; columns: number } = gridConfig
  const [grid, setGrid]: [Grid, React.Dispatch<React.SetStateAction<Grid>>] = useState<Grid>(createEmptyGrid(rows, columns))
  const [isPlaying, setIsPlaying]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false)
  const playingRef: React.MutableRefObject<boolean> = useRef(isPlaying)
  playingRef.current = isPlaying

  return (
    <div className='GameLife'>
      <h1 className='md:text-2xl text-xl'>Conway's Game of Life</h1>
      <div className='flex gap-4 items-center'>
        <PlayPauseButton
          isPlaying={isPlaying}
          onClick={() => {
            setIsPlaying(!isPlaying)
            if (!isPlaying) playingRef.current = true           
          }}
        />
      </div>
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