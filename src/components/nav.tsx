import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { format } from 'date-fns'
import { Trash2 } from 'lucide-react'

const data = [
  {
    title: 'Last 24 hours',
    list: [
      {
        status: 'requires_amendments',
        title: 'King Kong Cash Game Review',
        date: new Date(),
      },
      {
        status: 'published',
        title: 'Betfair Casino Review',
        date: new Date(),
      },
      {
        status: 'requires_amendments',
        title: 'King Kong Cash Game Review',
        date: new Date(),
      },
      {
        status: 'published',
        title: 'Betfair Casino Review',
        date: new Date(),
      },
    ],
  },
  {
    title: 'Last 7 days',
    list: [
      {
        status: 'requires_amendments',
        title: 'King Kong Cash Game Review',
        date: new Date(),
      },
      {
        status: 'published',
        title: 'Betfair Casino Review',
        date: new Date(),
      },
      {
        status: 'requires_amendments',
        title: 'King Kong Cash Game Review',
        date: new Date(),
      },
      {
        status: 'published',
        title: 'Betfair Casino Review',
        date: new Date(),
      },
    ],
  },
  {
    title: 'Older',
    list: [
      {
        status: 'requires_amendments',
        title: 'King Kong Cash Game Review',
        date: new Date(),
      },
      {
        status: 'published',
        title: 'Betfair Casino Review',
        date: new Date(),
      },
      {
        status: 'requires_amendments',
        title: 'King Kong Cash Game Review',
        date: new Date(),
      },
      {
        status: 'published',
        title: 'Betfair Casino Review',
        date: new Date(),
      },
    ],
  },
]

const Nav = () => {
  return (
    <nav className="h-screen w-96 flex flex-col bg-white text-grey px-5 pb-10 overflow-auto">
      <header className="sticky top-0 bg-white flex items-center justify-between py-10 mb-6 z-[1]">
        <Image
          src="/assests/img/logo-violet.svg"
          alt="Logo"
          width={148}
          height={32}
        />
        <button className="text-xs text-grey underline">Log out</button>
      </header>

      <div className="flex flex-col mb-10">
        <h1 className="text-xl text-orange font-semibold mb-1">
          Your projects
        </h1>
        <Accordion type="single" collapsible className="w-full">
          {data.map((item, key) => (
            <AccordionItem key={key} value={`item-${key}`}>
              <AccordionTrigger className="">{item.title}</AccordionTrigger>
              <AccordionContent>
                {item.list.map((project, key) => (
                  <Link
                    key={key}
                    href=""
                    className="relative flex flex-col items-start px-3.5 py-5 border border-midgrey rounded-10 duration-300 hover:border-orange"
                  >
                    <button className="absolute top-3 right-1.5 flex p-2 rounded-full duration-300 hover:bg-gray-200">
                      <Trash2 size={16} />
                    </button>
                    {project.status === 'requires_amendments' && (
                      <Badge>Requires amendments</Badge>
                    )}
                    {project.status === 'published' && (
                      <Badge variant={'green'}>Published</Badge>
                    )}

                    <p className="font-semibold mt-3 mb-1">{project.title}</p>
                    <time dateTime="2018-07-07" className="text-midgrey text-8">
                      Uploaded {format(project.date, 'do MMMM yyyy')}
                    </time>
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <footer className="flex flex-col items-center gap-4 mt-auto">
        <Button asChild className="w-full font-semibold">
          <Link href="">Start a new project</Link>
        </Button>
        <Link href="" className="text-xs underline">
          What are the guidelines?
        </Link>
        <Link href="" className="text-xs underline">
          Get help with the tool
        </Link>
      </footer>
    </nav>
  )
}
export default Nav
