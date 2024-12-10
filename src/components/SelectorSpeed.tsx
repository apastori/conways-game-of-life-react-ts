import { ISelectorSpeedProps } from '../interfaces/ISelectorSpeedProps'

export const SelectorSpeed: React.FC<ISelectorSpeedProps> = ({
  onChange,
  value,
}: ISelectorSpeedProps): JSX.Element => {
  return (
    <label className="cursor-pointer group transition flex items-center justify-center ease-in bg-gray-700 h-8 hover:bg-gray-800 rounded px-2 shadow-md disabled:opacity-50">
      <select
        className="bg-gray-700 cursor-pointer group-hover:bg-gray-800 ease-in transition"
        aria-label='speed selector'
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