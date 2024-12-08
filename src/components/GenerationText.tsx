import React from 'react'
import { IGenerationTextProps } from '../interfaces/IGenerationTextProps'

export const GenerationText: React.FC<IGenerationTextProps> = ({ generation }) => {
  return (
    <div>
      <p>Generation:</p>
      <span>{generation}</span>
    </div>
  )
}
