import * as Popover from '@radix-ui/react-popover'
import clsx from 'clsx'
import { ProgressBar } from './ProgressBar'

interface HabitDayProps {
  completed: number,
  amount: number
}
export function HabitDay({ completed, amount }: HabitDayProps) {
  const completedPercentage = Math.round((completed / amount) * 100)
  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx("w-10 h-10 border-2 rounded-lg", {
          'bg-zinc-800 border-zinc-700': completedPercentage === 0,
          'bg-violet-300 border-violet-200': completedPercentage > 0 && completedPercentage < 25,
          'bg-violet-400 border-violet-300': completedPercentage >= 25 && completedPercentage < 50,
          'bg-violet-500 border-violet-400': completedPercentage >= 50 && completedPercentage < 75,
          'bg-violet-600 border-violet-500': completedPercentage >= 75 && completedPercentage < 100,
          'bg-violet-700 border-violet-600': completedPercentage === 100
        })}
      />
      <Popover.Portal>
        <Popover.Content className='min-w-[320px] p-6 rounded-2xl bg-zinc-800 flex flex-col border-[1px] border-violet-500'>
          <span className='font-semibold text-zinc-400'>terça-feira</span>
          <span className='mt-1 font-extrabold leading-tight tex-3xl'>17/01</span>
          <ProgressBar progress={completedPercentage} />
          <Popover.Arrow height={8} width={16} className='fill-violet-500' />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}