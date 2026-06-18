import React from 'react'
import { IGenerationTextProps } from '../interfaces/IGenerationTextProps'

export const GenerationText: React.FC<IGenerationTextProps> = ({
  generation,
}: IGenerationTextProps): JSX.Element => {
  return (
    <div className="flex items-center gap-2 font-tech text-sm uppercase tracking-widest">
      <span className="text-neon-ice/60">Generation:</span>
      <span className="font-display text-lg font-bold text-neon-cyan tabular-nums drop-shadow-glow-cyan-sm">
        {generation}
      </span>
    </div>
  )
}
