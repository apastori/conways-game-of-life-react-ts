import React from 'react'
import { IEditingToggleProps } from '../interfaces/IEditingToggleProps'

export const EditingToggle: React.FC<IEditingToggleProps> = ({
  label,
  checked,
  onChange,
}: IEditingToggleProps): JSX.Element => {
  return (
    <label className="cyber-toggle flex items-center gap-3 font-tech text-sm uppercase tracking-wider text-neon-ice/80">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event: React.ChangeEvent<HTMLInputElement>): void => onChange(event.target.checked)}
      />
      <span className="cyber-toggle-track">
        <span className="cyber-toggle-thumb" />
      </span>
      <span>{label}</span>
    </label>
  )
}
