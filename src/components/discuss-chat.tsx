import React, { useState, ReactNode } from 'react'
import { Button } from './ui/button'
import { Download, X } from 'lucide-react'
import { Input } from './ui/input'
import Link from 'next/link'

interface IProps {
  topic: ReactNode
}

const DiscussChat = ({ topic }: IProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button size={'sm'} variant="purple" onClick={() => setIsOpen(true)}>
        Discuss
      </Button>
      {isOpen && (
        <div className="absolute top-20 right-0 bottom-0 -left-5 flex flex-col bg-white text-black rounded-t-lg overflow-hidden z-10">
          <header className="bg-paplepurple text-white flex items-center justify-between py-1 pl-5 pr-2">
            <b>CasinoAI</b>
            <div className="flex [&>*]:flex [&>*]:p-2 [&>*]:duration-300 [&>*:hover]:text-purple">
              <a href="" download>
                <Download />
              </a>
              <button type="button" onClick={() => setIsOpen(false)}>
                <X />
              </button>
            </div>
          </header>

          <div className="flex-1 flex flex-col gap-8 py-8 pr-4 pl-6 overflow-auto">
            <div className="border-b border-midgrey pb-5">{topic}</div>

            {[...Array(3).keys()].map((_, key) => (
              <div key={key} className="group flex gap-5 pr-14">
                <div className="w-3.5 h-3.5 rounded-full bg-orange group-odd:bg-green" />
                <div className="w-[calc(100%-2rem)] flex flex-col gap-2">
                  <p className="text-midgrey">CasinoAI</p>
                  <p className="text-grey">
                    Hi, Chris! What can I help you with regarding this action?
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start gap-4 px-4 py-8 text-xs">
            <Input
              placeholder="Enter your message here..."
              className="border border-grey px-6 py-2.5 text-black"
            />
            <Button size={'xs'} variant={'link'} asChild>
              <Link href="">Request support</Link>
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
export default DiscussChat
