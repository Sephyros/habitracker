import * as Popover from '@radix-ui/react-popover'
import { ProgressBar } from './ProgressBar'
export function HabitDay() {
  return (
    <Popover.Root>
      <Popover.Trigger className="w-10 h-10 bg-zinc-800 border-2 border-zinc-700 rounded-lg" />
      <Popover.Portal>
        <Popover.Content className='min-w-[320px] p-6 rounded-2xl bg-zinc-800 flex flex-col border-[1px] border-violet-500'>
          <span className='font-semibold text-zinc-400'>terça-feira</span>
          <span className='mt-1 font-extrabold leading-tight tex-3xl'>17/01</span>
          <ProgressBar progress={15} />
          <Popover.Arrow height={8} width={16} className='fill-violet-500' />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}