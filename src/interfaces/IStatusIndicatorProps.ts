export type StatusTone = 'cyan' | 'green' | 'amber' | 'dim' | 'purple'

export interface IStatusIndicatorProps {
  label: string
  tone: StatusTone
}
