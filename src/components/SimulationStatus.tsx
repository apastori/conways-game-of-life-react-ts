import React from 'react'
import { ISimulationStatusProps } from '../interfaces/ISimulationStatusProps'

export const SimulationStatus: React.FC<ISimulationStatusProps> = ({
  isPlaying,
}: ISimulationStatusProps): JSX.Element => {
  return (
    <div>
      <p>
        Status:{' '}
        <span className={isPlaying ? 'text-green-400' : 'text-gray-400'}>
          {isPlaying ? 'RUNNING' : 'PAUSED'}
        </span>
      </p>
    </div>
  )
}
