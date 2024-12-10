import { useCallback, useRef, useState } from 'react'
import { IGameLifeProps } from './interfaces/IGameLifeProps'
import type { Grid } from './types/GridType'
import { GridConfig } from './GridConfig'
import { createEmptyGrid } from './utils/createEmptyGrid'
import { twMerge } from 'tailwind-merge'
import { PlayPauseButton } from './components/PlayPauseButton'
import type { isInteger } from './types/isIntegerType'
import { GenerationText } from './components/GenerationText'
import { Directions } from './Directions'
import { createNonNegativeInteger } from './utils/createNonNegativeInteger'
import { NonNegativeInteger } from './types/NonNegativeInteger'
import { BooleanNumber } from './types/BooleanNumberType'
import { Rules } from './Rules'
import { createInteger } from './utils/createInteger'
import { SeedRandomButton } from './components/SeedRandomButton'
import { ClearButton } from './components/ClearButton'
import { assertIsInteger } from './utils/assertIsInteger'
import GridButton from './components/GridButton'

const GameLife: React.FC<IGameLifeProps> = ({ gridConfig }: IGameLifeProps): JSX.Element => {
  const { rows, columns }: { rows: number; columns: number } = gridConfig
  const [grid, setGrid]: [Grid, React.Dispatch<React.SetStateAction<Grid>>] = useState<Grid>(createEmptyGrid(rows, columns))
  const [isPlaying, setIsPlaying]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false)
  const [generation, setGeneration]: [number, React.Dispatch<React.SetStateAction<number>>] = useState(0)
  const [isMouseDown, setIsMouseDown]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false)
  const [speed, setSpeed]: [number, React.Dispatch<React.SetStateAction<number>>] = useState(100)
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
            //Make sure row + directionX expression is Integer
            const neighborRow: number = createInteger(row + directionX)
            const neighborCol: number = createInteger(col + directionY)
            // Ensure the neighbor is within grid bounds
            if (
              neighborRow >= 0 &&
              neighborRow < GridConfig.rows &&
              neighborCol >= 0 &&
              neighborCol < GridConfig.columns
            ) {
              liveNeighbors =
              createNonNegativeInteger(liveNeighbors + (currentGrid[neighborRow][neighborCol] ? 1 : 0 as BooleanNumber))
            }
          })
          const underPopulation: boolean = liveNeighbors < 2
          const overpopulation: boolean = liveNeighbors > 3
          // Apply Conway's Game of Life rules
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
    })
    setGeneration((prevGeneration: number) => {
      assertIsInteger(prevGeneration)
      return prevGeneration + 1
    })
    setTimeout(runGameOfLife, 100)
  }, [playingRef, setGrid])

  const handleMouseDown = (): void => {
    setIsMouseDown(true)
  }

  const handleMouseUp = (): void => {
    setIsMouseDown(false)
  }

  const handleMouseEnter = (row: number, col: number): void => {
    if (isMouseDown) {
      toggleCellState(row, col)
    }
  }

  const toggleCellState = (rowToToggle: number, columnToToggle: number): void => {
    const newGrid = grid.map((row, rowIndex) =>
      row.map((cell, colIndex) =>
        rowIndex === rowToToggle && colIndex === columnToToggle
          ? cell
            ? 0
            : 1
          : cell
      )
    )
    setGrid(newGrid)
  }

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
        <SeedRandomButton
          onClick={
            () => {
              const newGridRows: Grid = []
              for (let i: number = 0; i < rows; i++) {
                newGridRows.push(
                  Array.from(Array(columns), () => {
                    return Math.random() > 0.75 ? 1 : 0
                  })
                )  
              }
              setGrid(newGridRows)
            }
          }
        />
        <ClearButton
          onClick={() => {
            setGrid(createEmptyGrid(rows, columns))
            setIsPlaying(false)  
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
              <GridButton
                key={`${rowIndex}-${colIndex}`}
                rowIndex={rowIndex}
                colIndex={colIndex}
                isActive={grid[rowIndex][colIndex]}
                handleMouseDown={handleMouseDown}
                handleMouseUp={handleMouseUp}
                handleMouseEnter={handleMouseEnter}
                toggleCellState={toggleCellState}
              />
            ))
          ))
        }
      </div>      
    </div>
  ) 
}

export default GameLife