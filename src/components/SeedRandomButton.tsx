import React from 'react'
import { ISeedButtonProps } from '../interfaces/ISeedButtonProps'

export const SeedRandomButton: React.FC<ISeedButtonProps> = ({
  onClick,
  children
}: ISeedButtonProps): JSX.Element => {
  return (
    <React.Fragment>
      <button
        onClick={onClick}
        style={{
          paddingRight: '1rem !important',
          paddingLeft: '1rem !important'
        }}
        className='transition ease-in flex items-center justify-center h-8 rounded-full px-4 shadow-md bg-gray-700 hover:bg-gray-800'
      >
        Seed Random
        {children}
      </button>
    </React.Fragment>
  )
}
