import React from 'react'
import { IStatusIndicatorProps } from '../interfaces/IStatusIndicatorProps'

const toneClassMap: Record<IStatusIndicatorProps['tone'], string> = {
  cyan: 'status-dot--cyan',
  green: 'status-dot--green',
  amber: 'status-dot--amber',
  dim: 'status-dot--dim',
  purple: 'status-dot--purple',
}

export const StatusIndicator: React.FC<IStatusIndicatorProps> = ({
  label,
  tone,
}: IStatusIndicatorProps): JSX.Element => {
  return (
    <div className="flex items-center gap-2 font-tech text-xs uppercase tracking-widest text-neon-ice/70">
      <span className={`status-dot ${toneClassMap[tone]}`} />
      <span>{label}</span>
    </div>
  )
}
