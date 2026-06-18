import React from 'react'
import { ISimulationStatusProps } from '../interfaces/ISimulationStatusProps'

type SimState = 'running' | 'paused' | 'stopped'

const deriveState = (isPlaying: boolean, hasSimulationStarted: boolean): SimState => {
  if (isPlaying) return 'running'
  if (hasSimulationStarted) return 'paused'
  return 'stopped'
}

const stateConfig: Record<SimState, { label: string; dotClass: string; textClass: string }> = {
  running: {
    label: 'RUNNING',
    dotClass: 'status-dot--green',
    textClass: 'text-neon-teal',
  },
  paused: {
    label: 'PAUSED',
    dotClass: 'status-dot--amber',
    textClass: 'text-neon-amber',
  },
  stopped: {
    label: 'STOPPED',
    dotClass: 'status-dot--dim',
    textClass: 'text-neon-ice/50',
  },
}

export const SimulationStatus: React.FC<ISimulationStatusProps> = ({
  isPlaying,
  hasSimulationStarted = false,
}: ISimulationStatusProps): JSX.Element => {
  const state = deriveState(isPlaying, hasSimulationStarted)
  const config = stateConfig[state]

  return (
    <div className="flex items-center gap-2 font-tech text-sm uppercase tracking-widest">
      <span className={`status-dot ${config.dotClass}`} />
      <span className="text-neon-ice/60">Status:</span>
      <span className={`font-semibold ${config.textClass}`}>{config.label}</span>
    </div>
  )
}
