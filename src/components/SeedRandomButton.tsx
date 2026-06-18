import React from 'react'
import { ISeedButtonProps } from '../interfaces/ISeedButtonProps'
import { ControlButton } from './ControlButton'

export const SeedRandomButton: React.FC<ISeedButtonProps> = ({
  onClick,
}: ISeedButtonProps): JSX.Element => {
  return (
    <ControlButton label="Random" onClick={onClick} tone="purple" />
  )
}
