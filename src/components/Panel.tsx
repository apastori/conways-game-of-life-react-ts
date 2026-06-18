import React from 'react'
import { twMerge } from 'tailwind-merge'
import { IPanelProps } from '../interfaces/IPanelProps'

const toneGlowMap: Record<NonNullable<IPanelProps['tone']>, string> = {
  cyan: 'shadow-glow-cyan',
  purple: 'shadow-glow-purple',
  magenta: 'shadow-glow-magenta',
}

export const Panel: React.FC<IPanelProps> = ({
  title,
  tone = 'cyan',
  className,
  children,
}: IPanelProps): JSX.Element => {
  return (
    <div
      className={twMerge(
        'glass-panel neon-border animate-panel-in p-4 md:p-6',
        toneGlowMap[tone],
        className
      )}
    >
      {title && (
        <h2 className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-neon-cyan/80 mb-4">
          {title}
        </h2>
      )}
      {children}
    </div>
  )
}
