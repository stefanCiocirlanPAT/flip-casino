import React, { useState } from 'react'
import { Button } from './ui/button'
import OlBgIcon from '@/assests/icons/OlBgIcon'
import { twMerge } from 'tailwind-merge'
import { Check } from 'lucide-react'

const data = [
  {
    title: 'Consider bullet points',
    desc: 'Bullet pointed lists improve overall scannability',
  },
  {
    title: 'Keep sentences short and snappy',
    desc: 'Reduce sentence length for improved legibility',
  },
  {
    title: 'Capitalisation consistency',
    desc: 'Check capitalisation on game and manufacturer games is consistent throughout the copy',
  },
  {
    title: 'Use approachable language',
    desc: 'Content should sound natural and conversational/approachable, and not keyword heavy',
  },
]

const ActionsRequired = () => {
  const [activeStep] = useState(1)

  return (
    <div className="w-[26.625rem] flex flex-col pt-8">
      <header className="flex items-center justify-between mb-12">
        <h2 className="font-semibold text-2xl">Actions required</h2>
        <p>4 Remaining</p>
      </header>

      <ul className="flex flex-col gap-10 pr-20 pb-10 overflow-auto">
        {data.map((item, key) => (
          <ol
            key={key}
            className={twMerge(
              'flex items-start gap-4 opacity-65 pointer-events-none',
              activeStep === key && 'opacity-100 pointer-events-auto',
              activeStep > key && 'opacity-100 [&_svg]:fill-orange'
            )}
          >
            <div className="relative w-6 h-6 text-xs flex justify-center pt-0.5 z-[1]">
              {key < activeStep ? <Check size={16} /> : <b>{key + 1}</b>}

              <OlBgIcon className="absolute inset-0 stroke-orange -z-[1]" />
            </div>
            <div className="w-[calc(100%-2.5rem)]">
              <div className="pr-12">
                <b>{item.title}</b>
                <p>{item.desc}</p>
              </div>
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
            </div>
          </ol>
        ))}
      </ul>
    </div>
  )
}
export default ActionsRequired
