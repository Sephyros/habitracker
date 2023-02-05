import * as Popover from '@radix-ui/react-popover'
import clsx from 'clsx'
import { ProgressBar } from './ProgressBar'
import dayjs from 'dayjs';
import { HabitsList } from './HabitsList';
import { useState } from 'react';

interface HabitDayProps {
  date: Date
  defaultCompleted?: number
  amount?: number
}
export function HabitDay({ defaultCompleted = 0, amount = 0, date }: HabitDayProps) {
  const [completed, setCompleted] = useState(defaultCompleted)

  const completedPercentage = amount > 0 ? Math.round((completed / amount) * 100) : 0

  const dayAndMonth = dayjs(date).format('DD/MM')
  const dayOfWeek = dayjs(date).format('dddd')

  const today = dayjs().startOf('day').toDate()
  const isCurrentDay = dayjs(date).isSame(today)

  function handleCompletedChanged(completed: number) {
    setCompleted(completed)
  }

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx("w-10 h-10 border-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-background", {
          'bg-zinc-800 border-zinc-700': completedPercentage === 0,
          'bg-violet-700 border-violet-600': completedPercentage > 0 && completedPercentage < 25,
          'bg-violet-600 border-violet-500': completedPercentage >= 25 && completedPercentage < 50,
          'bg-violet-500 border-violet-400': completedPercentage >= 50 && completedPercentage < 75,
          'bg-violet-400 border-violet-300': completedPercentage >= 75 && completedPercentage < 100,
          'bg-violet-300 border-violet-200': completedPercentage === 100,
          'border-green-500 border-3': isCurrentDay
        })}
      />
      <Popover.Portal>
        <Popover.Content className='min-w-[320px] p-6 rounded-2xl bg-zinc-800 flex flex-col border-[1px] border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-background'>
          <span className='font-semibold text-zinc-400'>{dayOfWeek}</span>
          <span className='mt-1 font-extrabold leading-tight tex-3xl'>{dayAndMonth}</span>
          <ProgressBar progress={completedPercentage} />
          <HabitsList date={date} onCompletedChanged={handleCompletedChanged} />
          <Popover.Arrow height={8} width={16} className='fill-violet-500' />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}