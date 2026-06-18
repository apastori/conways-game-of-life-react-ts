import React from 'react'
import { IClearButtonProps } from '../interfaces/IClearButtonProps'
import { ControlButton } from './ControlButton'

export const ClearButton: React.FC<IClearButtonProps> = ({
  onClick,
}: IClearButtonProps): JSX.Element => {
  return (
    <ControlButton label="Clear" onClick={onClick} tone="magenta" />
  )
}
