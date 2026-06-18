import React from 'react'
import { IFooterStatusBarProps } from '../interfaces/IFooterStatusBarProps'
import { GenerationText } from './GenerationText'
import { SimulationStatus } from './SimulationStatus'

const speedLabelMap: Record<number, string> = {
  1000: 'Slow',
  500: 'Medium',
  100: 'Fast',
  50: 'Lightning',
}

export const FooterStatusBar: React.FC<IFooterStatusBarProps> = ({
  generation,
  isPlaying,
  hasSimulationStarted,
  speed,
}: IFooterStatusBarProps): JSX.Element => {
  return (
    <footer className="glass-panel neon-border mt-6 px-6 py-3 animate-panel-in">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <SimulationStatus isPlaying={isPlaying} hasSimulationStarted={hasSimulationStarted} />
        <GenerationText generation={generation} />
        <div className="font-tech text-xs uppercase tracking-widest text-neon-purple/70">
          Speed: <span className="text-neon-purple">{speedLabelMap[speed] ?? speed}</span>
        </div>
      </div>
    </footer>
  )
}
