import React from 'react'
import { twMerge } from 'tailwind-merge'
import { IControlSectionProps } from '../interfaces/IControlSectionProps'

export const ControlSection: React.FC<IControlSectionProps> = ({
  title,
  children,
  className,
}: IControlSectionProps): JSX.Element => {
  return (
    <div className="mb-5 last:mb-0">
      <div className="section-divider">
        <span className="font-tech text-xs uppercase tracking-[0.2em] text-neon-purple/80 whitespace-nowrap">
          {title}
        </span>
      </div>
      <div className={twMerge('flex flex-wrap gap-3 items-center justify-center mt-3', className)}>
        {children}
      </div>
    </div>
  )
}
