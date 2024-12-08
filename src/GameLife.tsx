import { useCallback, useRef, useState } from 'react'
import { IGameLifeProps } from './interfaces/IGameLifeProps'
import type { Grid } from './types/GridType'
import { GridConfig } from './GridConfig'
import { createEmptyGrid } from './utils/utils'
import { twMerge } from 'tailwind-merge'
import { PlayPauseButton } from './components/PlayPauseButton'
import type { isInteger } from './types/isIntegerType'
import { GenerationText } from './components/GenerationText'
import { Directions } from './Directions'
import { createNonNegativeInteger } from './utils/createNonNegativeInteger'
import { NonNegativeInteger } from './types/NonNegativeInteger'
import { BooleanNumber } from './types/BooleanNumberType'
import { Rules } from './Rules'

const GameLife: React.FC<IGameLifeProps> = ({ gridConfig }: IGameLifeProps) => {
  const { rows, columns }: { rows: number; columns: number } = gridConfig
  const [grid, setGrid]: [Grid, React.Dispatch<React.SetStateAction<Grid>>] = useState<Grid>(createEmptyGrid(rows, columns))
  const [isPlaying, setIsPlaying]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false)
  const [generation, setGeneration]: [number, React.Dispatch<React.SetStateAction<number>>] = useState(0)
  const playingRef: React.MutableRefObject<boolean> = useRef(isPlaying)
  playingRef.current = isPlaying

  const runGameOfLife = useCallback(() => {
    if (!playingRef.current)  return
    setGrid((currentGrid) => {
      const newGrid: Grid = currentGrid.map((arr) => [...arr])
      // Since Typescript types work only at compile time, I can
      // define iteration variables rows and columns as IsInteger<0> 
      for (let row: isInteger<0> = 0; row < GridConfig.rows; row++) {
        for (let col: isInteger<0.0> = 0; col < GridConfig.columns; col++) {
          let liveNeighbors: NonNegativeInteger = createNonNegativeInteger(0)
          // Check all neighboring cells
          Object.values(Directions).forEach(([directionX, directionY]) => {

            const neighborRow = createNonNegativeInteger(row + directionX)
            const neighborCol = createNonNegativeInteger(col + directionY)

            // Ensure the neighbor is within grid bounds
            if (
              neighborRow >= 0 &&
              neighborRow < GridConfig.rows &&
              neighborCol >= 0 &&
              neighborCol < GridConfig.columns
            ) {
              liveNeighbors =
              createNonNegativeInteger(liveNeighbors +  (currentGrid[neighborRow][neighborCol] ? 1 : 0 as BooleanNumber))
            }
          })
          const underPopulation: boolean = liveNeighbors < 2
          const overpopulation: boolean = liveNeighbors > 3
          // Apply Conway's Game of Life rules
          if (Rules.underPopulation(liveNeighbors) || Rules.overPopulation(liveNeighbors)) {
            newGrid[row][col] = 0
          }
          const isCellDead: boolean = currentGrid[row][col] === 0
          if (Rules.reproduction(liveNeighbors, isCellDead) || Rules.survival(liveNeighbors)) {
            newGrid[row][col] = 1
          }
        }
      }
      return newGrid  
    })
    setTimeout(runGameOfLife, 100)
  }, [playingRef, setGrid])

  return (
    <div className='GameLife'
      style={{
        textAlign: 'center'
      }}
    >
      <h1 className='md:text-2xl text-xl'>Conway's Game of Life</h1>
      <div className='flex gap-4 items-center justify-center' 
        style={{
          marginTop: '15px',
          marginBottom: '15px'
        }}>
        <PlayPauseButton
          isPlaying={isPlaying}
          onClick={() => {
            setIsPlaying(!isPlaying)
            if (!isPlaying) {
              playingRef.current = true
              // Run Game of Life Simulation
              runGameOfLife()
            }           
          }}
        />
      </div>
      <GenerationText generation={generation}/>
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