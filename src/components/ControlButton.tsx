import React from 'react'
import { twMerge } from 'tailwind-merge'
import { IControlButtonProps } from '../interfaces/IControlButtonProps'

const toneClassMap: Record<NonNullable<IControlButtonProps['tone']>, string> = {
  cyan: '',
  purple: 'cyber-btn--purple',
  magenta: 'cyber-btn--magenta',
}

export const ControlButton: React.FC<IControlButtonProps> = ({
  label,
  onClick,
  disabled = false,
  active = false,
  tone = 'cyan',
}: IControlButtonProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={twMerge(
        'cyber-btn',
        toneClassMap[tone],
        active && 'cyber-btn--active'
      )}
    >
      {label}
    </button>
  )
}
