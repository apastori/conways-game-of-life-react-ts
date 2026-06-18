import React from 'react'

export const BackgroundFX: React.FC = (): JSX.Element => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgb(var(--neon-cyan) / 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgb(var(--neon-cyan) / 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      <div
        className="absolute top-0 left-1/4 w-1/2 h-full opacity-20 animate-beam-drift"
        style={{
          background: 'linear-gradient(90deg, transparent, rgb(var(--neon-cyan) / 0.15), transparent)',
          transform: 'rotate(-12deg)',
        }}
      />
      <div
        className="absolute top-0 right-0 w-1/3 h-full opacity-15 animate-beam-drift"
        style={{
          background: 'linear-gradient(90deg, transparent, rgb(var(--neon-purple) / 0.12), transparent)',
          transform: 'rotate(-8deg)',
          animationDelay: '4s',
        }}
      />
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-neon-cyan/40 animate-float-particle"
          style={{
            left: `${(i * 17 + 5) % 95}%`,
            top: `${(i * 23 + 10) % 90}%`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${6 + (i % 4)}s`,
          }}
        />
      ))}
    </div>
  )
}
