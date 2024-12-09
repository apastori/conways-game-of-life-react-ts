import React from 'react'
import { IClearButtonProps } from '../interfaces/IClearButtonProps'

export const ClearButton: React.FC<IClearButtonProps> = ({
  onClick
}: IClearButtonProps): JSX.Element => {
  return (
    <React.Fragment>
      <button
        onClick={onClick}
        className='transition ease-in flex items-center justify-center h-8 rounded-full shadow-md px-4 bg-gray-700 hover:bg-gray-800'
        style={{
          paddingRight: '1rem !important',
          paddingLeft: '1rem !important'
        }}
      >
        Clear
      </button>
    </React.Fragment>
  )
}
