export type ButtonTone = 'cyan' | 'purple' | 'magenta'

export interface IControlButtonProps {
  label: string
  onClick: () => void
  disabled?: boolean
  active?: boolean
  tone?: ButtonTone
}
