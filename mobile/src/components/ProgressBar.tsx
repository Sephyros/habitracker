import clsx from "clsx"
import { View } from "react-native"

interface Props {
  progress?: number
}
export function ProgressBar({ progress = 0 }: Props) {
  return (
    <View
      className="w-full h-3 rounded-xl bg-zinc-700 mt-4">
      <View
        className={clsx('h-3 rounded-xl', {
          ['bg-zinc-800 border-zinc-700']: progress === 0,
          ['bg-violet-900 border-violet-800']: progress > 0 && progress < 25,
          ['bg-violet-800 border-violet-700']: progress >= 25 && progress < 50,
          ['bg-violet-700 border-violet-600']: progress >= 50 && progress < 75,
          ['bg-violet-600 border-violet-500']: progress >= 75 && progress < 100,
          ['bg-violet-500 border-violet-400']: progress === 100
        })}
        style={{ width: `${progress}%` }}>

      </View>
    </View>
  )
}