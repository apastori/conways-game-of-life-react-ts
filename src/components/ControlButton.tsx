import React from 'react'
import { IControlButtonProps } from '../interfaces/IControlButtonProps'

export const ControlButton: React.FC<IControlButtonProps> = ({
  label,
  onClick,
  disabled = false,
}: IControlButtonProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        transition ease-in flex items-center justify-center 
        h-8 rounded-full shadow-md px-4 bg-gray-700 hover:bg-gray-800 
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
      style={{
        paddingRight: '1rem !important',
        paddingLeft: '1rem !important',
      }}
    >
      {label}
    </button>
  )
}
