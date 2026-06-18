import React, { useEffect, useState } from 'react'

const formatDate = (date: Date): string => {
  return date
    .toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      timeZone: 'UTC',
    })
    .toUpperCase()
}

const formatTime = (date: Date): string => {
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: 'UTC',
  })
}

export const LiveTimestamp: React.FC = (): JSX.Element => {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center font-tech tracking-widest">
      <span className="text-xs text-neon-ice/60 uppercase">{formatDate(now)}</span>
      <span className="text-lg font-semibold text-neon-cyan tabular-nums drop-shadow-glow-cyan-sm">
        {formatTime(now)} UTC
      </span>
    </div>
  )
}
