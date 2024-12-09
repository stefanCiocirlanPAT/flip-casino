import { Check, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { Button } from './ui/button'

const data = [
  {
    title: 'Use our improved language',
    desc: 'Online casino games are all the rage these days, and King Kong Cash is a total standout in the world of spin-and-win slots. With its fun theme, easy-to-grasp gameplay, and wide appeal, it’s perfect for everyone—from first-timers to seasoned pros. Sure, it has a couple of minor quirks, but overall, King Kong Cash offers a fair and entertaining experience that deserves a solid 4 out of 5 stars.',
  },
  {
    title: 'Correct punctutation mistake',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et dolorum alias quasi modi ducimus! Dignissimos a enim qui nostrum veritatis quam, velit doloribus laborum laboriosam unde, voluptates quia, magnam maiores.',
  },
  {
    title: 'Use our improved language',
    desc: 'Online casino games are all the rage these days, and King Kong Cash is a total standout in the world of spin-and-win slots. With its fun theme, easy-to-grasp gameplay, and wide appeal, it’s perfect for everyone—from first-timers to seasoned pros. Sure, it has a couple of minor quirks, but overall, King Kong Cash offers a fair and entertaining experience that deserves a solid 4 out of 5 stars.',
  },
  {
    title: 'Correct punctutation mistake',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et dolorum alias quasi modi ducimus! Dignissimos a enim qui nostrum veritatis quam, velit doloribus laborum laboriosam unde, voluptates quia, magnam maiores.',
  },
]

const ReviewSuggestions = () => {
  const [activeStep] = useState(1)

  return (
    <div className="w-[26.625rem] flex flex-col pt-8">
      <header className="flex items-center justify-between mb-12">
        <h2 className="font-semibold text-2xl">Review suggestions</h2>
        <div className="text-xs bg-orange tetx-white rounded-full px-3 py-2">
          12
        </div>
      </header>

      <ul className="flex flex-col pr-4 pb-10 overflow-auto">
        {data.map((item, key) => (
          <ol
            key={key}
            className={twMerge(
              'flex items-start gap-4 py-8 first:pt-0 border-b border-white/30 opacity-65 pointer-events-none',
              activeStep === key && 'opacity-100 pointer-events-auto',
              activeStep > key && 'opacity-100'
            )}
          >
            <div
              className={twMerge(
                'w-12 h-8 flex gap-1 items-center justify-center bg-orange rounded-full text-xs',
                key < activeStep && 'bg-green',
                key === activeStep && '[&_svg]:rotate-180'
              )}
            >
              {key < activeStep ? (
                <Check size={20} />
              ) : (
                <>
                  <b>{key + 1}</b> <ChevronUp size={16} />
                </>
              )}
            </div>
            <div className="w-[calc(100%-4rem)]">
              <div>
                <p className="text-xs opacity-70">{item.title}</p>
                <p
                  className={twMerge(
                    'text-sm',
                    key > activeStep && 'line-clamp-1'
                  )}
                >
                  {key >= activeStep ? item.desc : 'Change Approved'}
                </p>
              </div>
              {key >= activeStep && (
                <div
                  className={twMerge(
                    'flex gap-2 mt-5',
                    activeStep > key && 'opacity-65 pointer-events-none'
                  )}
                >
                  <Button size={'sm'}>Accept</Button>
                  <Button size={'sm'} variant={'purple'}>
                    Discuss
                  </Button>
                  <Button size={'sm'} variant={'outline'}>
                    Reject
                  </Button>
                </div>
              )}
            </div>
          </ol>
        ))}
      </ul>
    </div>
  )
}
export default ReviewSuggestions
