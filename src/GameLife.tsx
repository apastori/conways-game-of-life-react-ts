import { useCallback, useRef, useState } from 'react'
import { IGameLifeProps } from './interfaces/IGameLifeProps'
import type { Grid } from './types/GridType'
import { createEmptyGrid } from './utils/createEmptyGrid'
import { SeedRandomButton } from './components/SeedRandomButton'
import { ClearButton } from './components/ClearButton'
import { assertIsInteger } from './utils/assertIsInteger'
import GridButton from './components/GridButton'
import { SelectorSpeed } from './components/SelectorSpeed'
import { ControlButton } from './components/ControlButton'
import { EditingToggle } from './components/EditingToggle'
import { computeNextGrid } from './computeNextGrid'
import { canEditGrid } from './canEditGrid'
import { Header } from './components/Header'
import { Panel } from './components/Panel'
import { ControlSection } from './components/ControlSection'
import { FooterStatusBar } from './components/FooterStatusBar'

const GameLife: React.FC<IGameLifeProps> = ({ gridConfig }: IGameLifeProps): JSX.Element => {
  const { rows, columns }: { rows: number; columns: number } = gridConfig
  const [grid, setGrid]: [Grid, React.Dispatch<React.SetStateAction<Grid>>] = useState<Grid>(createEmptyGrid(rows, columns))
  const [isPlaying, setIsPlaying]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false)
  const [hasSimulationStarted, setHasSimulationStarted]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false)
  const [allowEditingWhilePaused, setAllowEditingWhilePaused]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(true)
  const [allowEditingWhileRunning, setAllowEditingWhileRunning]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false)
  const [generation, setGeneration]: [number, React.Dispatch<React.SetStateAction<number>>] = useState(0)
  const [isMouseDown, setIsMouseDown]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false)
  const [speed, setSpeed]: [number, React.Dispatch<React.SetStateAction<number>>] = useState(100)

  const playingRef: React.MutableRefObject<boolean> = useRef(isPlaying)
  playingRef.current = isPlaying
  const speedRef: React.MutableRefObject<number> = useRef(speed)
  speedRef.current = speed

  const runGameOfLife = useCallback(() => {
    if (!playingRef.current) return
    setGrid((currentGrid) => computeNextGrid(currentGrid))
    setGeneration((prevGeneration: number) => {
      assertIsInteger(prevGeneration)
      return prevGeneration + 1
    })
    setTimeout(runGameOfLife, speedRef.current)
  }, [])

  const handleStart = (): void => {
    if (isPlaying) return
    setHasSimulationStarted(true)
    setIsPlaying(true)
    playingRef.current = true
    runGameOfLife()
  }

  const handlePause = (): void => {
    if (!isPlaying) return
    setIsPlaying(false)
    playingRef.current = false
  }

  const handleStep = (): void => {
    if (isPlaying) return
    setGrid((currentGrid) => computeNextGrid(currentGrid))
    setGeneration((prevGeneration: number) => {
      assertIsInteger(prevGeneration)
      return prevGeneration + 1
    })
  }

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
    if (!canEditGrid(hasSimulationStarted, isPlaying, allowEditingWhilePaused, allowEditingWhileRunning)) {
      return
    }
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
    <div className="GameLife w-full max-w-[1600px] mx-auto">
      <Header isPlaying={isPlaying} hasSimulationStarted={hasSimulationStarted} />

      <div className="flex flex-col xl:flex-row gap-6 items-start justify-center">
        <Panel title="Simulation Matrix" tone="cyan" className="flex-1 min-w-0 overflow-x-auto overflow-y-hidden">
          <div className="flex justify-center p-2">
            <div
              className="grid-display inline-grid"
              style={{
                display: 'grid',
                gridTemplateRows: `repeat(${rows}, 20px)`,
                gridTemplateColumns: `repeat(${columns}, 20px)`,
                gap: '1px',
                background: 'rgb(var(--neon-purple) / 0.15)',
                padding: '2px',
                borderRadius: '4px',
              }}
            >
              {grid.map((rows, rowIndex) =>
                rows.map((_col, colIndex) => (
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
              )}
            </div>
          </div>
        </Panel>

        <Panel title="Command Console" tone="purple" className="w-full xl:w-80 shrink-0">
          <ControlSection title="Simulation Controls">
            <ControlButton label="Start" onClick={handleStart} disabled={isPlaying} active={isPlaying} />
            <ControlButton label="Pause" onClick={handlePause} disabled={!isPlaying} />
            <ControlButton label="Step" onClick={handleStep} disabled={isPlaying} />
            <SelectorSpeed
              value={speed}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setSpeed(parseInt(e.target.value))
              }}
            />
          </ControlSection>

          <ControlSection title="Grid Controls">
            <ClearButton
              onClick={() => {
                setGrid(createEmptyGrid(rows, columns))
                setIsPlaying(false)
                playingRef.current = false
                setHasSimulationStarted(false)
                setGeneration(0)
              }}
            />
            <SeedRandomButton
              onClick={() => {
                const newGridRows: Grid = []
                for (let i: number = 0; i < rows; i++) {
                  newGridRows.push(
                    Array.from(Array(columns), () => {
                      return Math.random() > 0.75 ? 1 : 0
                    })
                  )
                }
                setGrid(newGridRows)
              }}
            />
          </ControlSection>

          <ControlSection title="Editing Controls" className="flex-col items-stretch gap-4">
            <EditingToggle
              label="Allow Editing While Paused"
              checked={allowEditingWhilePaused}
              onChange={setAllowEditingWhilePaused}
            />
            <EditingToggle
              label="Allow Editing While Running"
              checked={allowEditingWhileRunning}
              onChange={setAllowEditingWhileRunning}
            />
          </ControlSection>
        </Panel>
      </div>

      <FooterStatusBar
        generation={generation}
        isPlaying={isPlaying}
        hasSimulationStarted={hasSimulationStarted}
        speed={speed}
      />
    </div>
  )
}

export default GameLife
