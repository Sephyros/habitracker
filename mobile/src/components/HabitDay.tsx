import { TouchableOpacity, Dimensions, TouchableOpacityProps } from "react-native";
import clsx from "clsx";
import { generateProgressPercentage } from "../utils/generate-progress-percentage";
import dayjs from "dayjs";

const WEEK_DAYS = 7
const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5
export const DAY_MARGIN_BETWEEN = 8
export const DAY_SIZE = ((Dimensions.get('screen').width / WEEK_DAYS) - (SCREEN_HORIZONTAL_PADDING + 5))

interface Props extends TouchableOpacityProps {
  amountOfHabits?: number
  amountCompleted?: number
  date: Date
}
export function HabitDay({ amountOfHabits = 0, amountCompleted = 0, date, ...rest }: Props) {
  const amountAccomplishedPercentage = amountOfHabits > 0 ? generateProgressPercentage(amountOfHabits, amountCompleted) : 0
  const today = dayjs().startOf('day').toDate()
  const isCurrentDay = dayjs(date).isSame(today)

  return (
    <TouchableOpacity
      className={clsx('rounded-lg border-2 m-1', {
        ['bg-zinc-800 border-zinc-700']: amountAccomplishedPercentage === 0,
        ['bg-violet-300 border-violet-200']: amountAccomplishedPercentage > 0 && amountAccomplishedPercentage < 25,
        ['bg-violet-400 border-violet-300']: amountAccomplishedPercentage >= 25 && amountAccomplishedPercentage < 50,
        ['bg-violet-500 border-violet-400']: amountAccomplishedPercentage >= 50 && amountAccomplishedPercentage < 75,
        ['bg-violet-600 border-violet-500']: amountAccomplishedPercentage >= 75 && amountAccomplishedPercentage < 100,
        ['bg-violet-700 border-violet-600']: amountAccomplishedPercentage === 100,
        ['border-green-500 border-3']: isCurrentDay
      })}
      style={{ width: DAY_SIZE, height: DAY_SIZE }}
      activeOpacity={0.7}
      {...rest}
    />
  )
}