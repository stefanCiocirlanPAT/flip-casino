import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MainLayout from '@/components/layouts/MainLayout'
import Nav from '@/components/nav'
import { Progress } from '@/components/ui/progress'
import { twMerge } from 'tailwind-merge'

export default function Home() {
  const [isLoading] = useState(false)

  return (
    <MainLayout>
      <Nav />

      <div className="flex-1 flex items-center justify-center text-center">
        {isLoading ? (
          <output
            className="flex flex-col items-center"
            tabIndex={-1}
            aria-live="polite"
          >
            <p className="text-3xl font-semibold mb-9">
              Processing upload, please wait...
            </p>
            <Progress value={50} className="mb-3" />
            <span>50%</span>
          </output>
        ) : (
          <section className="flex flex-col items-center gap-14">
            <p className="text-3xl font-semibold">
              Get started by selecting an option below...
            </p>

            <div
              className={twMerge(
                'max-w-[37.5rem] flex gap-4',
                '[&>*]:flex-1 [&>*]:rounded-10 [&>*]:border [&>*]:border-dashed [&>*]:flex [&>*]:flex-col [&>*]:items-center [&>*]:justify-center [&>*]:gap-3 [&>*]:py-12 [&>*]:px-16 [&>*]:duration-300 [&>*:hover]:border-orange'
              )}
            >
              <label className="cursor-pointer">
                <input type="file" accept=".doc, .docx" className="sr-only" />
                <Image
                  src="/assests/img/doc.svg"
                  alt=""
                  width={47}
                  height={46}
                />
                <b>Upload file from computer</b>
                <p className="text-8">
                  <b>.doc</b> or <b>.docx</b> formats supported
                </p>
              </label>
              <Link href="">
                <Image
                  src="/assests/img/copy-paste.svg"
                  alt=""
                  width={47}
                  height={46}
                />
                <b>Copy and paste from file</b>
              </Link>
            </div>

            <Link href="" className="text-sm underline">
              How is my document or text used?
            </Link>
          </section>
        )}
      </div>
    </MainLayout>
  )
}
