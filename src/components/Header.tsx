import React from 'react'
import { IHeaderProps } from '../interfaces/IHeaderProps'
import { LiveTimestamp } from './LiveTimestamp'
import { StatusIndicator } from './StatusIndicator'

export const Header: React.FC<IHeaderProps> = ({
  isPlaying,
  hasSimulationStarted,
}: IHeaderProps): JSX.Element => {
  return (
    <header className="glass-panel neon-border animate-panel-in px-6 py-4 mb-6">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="text-left">
          <h1 className="font-display text-2xl md:text-3xl font-bold tracking-widest text-neon-ice uppercase drop-shadow-glow-cyan-sm">
            GAME OF LIFE TOTO
          </h1>
          <p className="font-tech text-sm text-neon-cyan/70 tracking-wider mt-1 uppercase">
            Conway Cellular Automata Simulation
          </p>
        </div>

        <LiveTimestamp />

        <div className="flex flex-col gap-2 items-end">
          <StatusIndicator label="SYSTEM ONLINE" tone="green" />
          <StatusIndicator
            label={hasSimulationStarted ? 'SIMULATION READY' : 'SIMULATION STANDBY'}
            tone={hasSimulationStarted ? 'cyan' : 'dim'}
          />
          <StatusIndicator
            label={isPlaying ? 'GRID ACTIVE' : 'GRID IDLE'}
            tone={isPlaying ? 'cyan' : 'purple'}
          />
        </div>
      </div>
    </header>
  )
}
