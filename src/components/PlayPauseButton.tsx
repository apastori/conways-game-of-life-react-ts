import { twMerge } from 'tailwind-merge'
import { IPlayPauseButtonProps } from '../interfaces/IPlayPauseButtonProps'
import { BsFillPauseFill, BsFillPlayFill } from 'react-icons/bs'

export const PlayPauseButton: React.FC<IPlayPauseButtonProps> = ({onClick, isPlaying}: IPlayPauseButtonProps) => {
  return (
    <button
      className={twMerge(
        'transition ease-in flex items-center justify-center h-8 w-8 rounded-full shadow-md',
        isPlaying
          ? 'bg-gray-700 hover:bg-gray-800'
          : 'bg-green-500 hover:bg-green-700'
      )}
      onClick={onClick}
    >
      {isPlaying ? (
        <BsFillPauseFill className="h-6 w-6" />
      ) : (
        <BsFillPlayFill className="h-6 w-6" />
      )}
    </button>
  )
}