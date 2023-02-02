import * as Popover from '@radix-ui/react-popover'
import * as Checkbox from '@radix-ui/react-checkbox'
import clsx from 'clsx'
import { ProgressBar } from './ProgressBar'
import { Check } from "phosphor-react";
import dayjs from 'dayjs';

interface HabitDayProps {
  date: Date
  completed?: number
  amount?: number
}
export function HabitDay({ completed = 0, amount = 0, date }: HabitDayProps) {
  const completedPercentage = amount > 0 ? Math.round((completed / amount) * 100) : 0
  const dayAndMonth = dayjs(date).format('DD/MM')
  const dayOfWeek = dayjs(date).format('dddd')
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
          <span className='font-semibold text-zinc-400'>{dayOfWeek}</span>
          <span className='mt-1 font-extrabold leading-tight tex-3xl'>{dayAndMonth}</span>
          <ProgressBar progress={completedPercentage} />
          <div className='mt-6 flex flex-col gap-3'>
            <Checkbox.Root
              className='flex items-center gap-3 group'
            >
              <div className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500'>
                <Checkbox.Indicator>
                  <Check size={20} className='text-white' />
                </Checkbox.Indicator>
              </div>
              <span className='font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400'>
                Beber 2L de água
              </span>
            </Checkbox.Root>
          </div>
          <Popover.Arrow height={8} width={16} className='fill-violet-500' />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}