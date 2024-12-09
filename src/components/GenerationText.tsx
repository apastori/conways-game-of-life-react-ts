import React from 'react'
import { IGenerationTextProps } from '../interfaces/IGenerationTextProps'

export const GenerationText: React.FC<IGenerationTextProps> = ({ generation }: IGenerationTextProps): JSX.Element => {
  return (
    <div>
      <p>Generation:</p>
      <span>{generation}</span>
    </div>
  )
}
