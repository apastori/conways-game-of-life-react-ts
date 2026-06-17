import React from 'react'
import { IEditingToggleProps } from '../interfaces/IEditingToggleProps'

export const EditingToggle: React.FC<IEditingToggleProps> = ({
  label,
  checked,
  onChange,
}: IEditingToggleProps): JSX.Element => {
  return (
    <label className='flex items-center gap-2 cursor-pointer'>
      <input
        type='checkbox'
        checked={checked}
        onChange={(event: React.ChangeEvent<HTMLInputElement>): void => onChange(event.target.checked)}
        className='cursor-pointer'
      />
      <span>{label}</span>
    </label>
  )
}
