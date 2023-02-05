import clsx from "clsx"
import { useEffect } from "react"
import { View } from "react-native"
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"

interface Props {
  progress?: number
}

export function ProgressBar({ progress = 0 }: Props) {
  const sharedProgress = useSharedValue(progress)

  const style = useAnimatedStyle(() => {
    return {
      width: `${sharedProgress.value}%`
    }
  })

  useEffect(() => {
    sharedProgress.value = withTiming(progress)
  }, [progress])

  return (
    <View
      className="w-full h-3 rounded-xl bg-zinc-700 mt-4">
      <Animated.View
        className=
        {clsx('h-3 rounded-xl ', {
          ['bg-violet-900 border-violet-800']: progress >= 0 && progress < 25,
          ['bg-violet-800 border-violet-700']: progress >= 25 && progress < 50,
          ['bg-violet-700 border-violet-600']: progress >= 50 && progress < 75,
          ['bg-violet-600 border-violet-500']: progress >= 75 && progress < 100,
          ['bg-violet-500 border-violet-400']: progress === 100
        })}
        style={style} />
    </View>
  )
}