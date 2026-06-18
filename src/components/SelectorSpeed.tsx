import { ISelectorSpeedProps } from '../interfaces/ISelectorSpeedProps'

export const SelectorSpeed: React.FC<ISelectorSpeedProps> = ({
  onChange,
  value,
}: ISelectorSpeedProps): JSX.Element => {
  return (
    <label className="flex items-center gap-2 font-tech text-xs uppercase tracking-wider text-neon-ice/70">
      <span>Speed</span>
      <select
        className="cyber-select"
        aria-label="speed selector"
        value={value}
        onChange={onChange}
      >
        <option value={1000}>Slow</option>
        <option value={500}>Medium</option>
        <option value={100}>Fast</option>
        <option value={50}>Lightning</option>
      </select>
    </label>
  )
}
