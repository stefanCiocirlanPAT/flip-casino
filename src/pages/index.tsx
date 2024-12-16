import { useState, ChangeEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Progress } from '@/components/ui/progress'
import { twMerge } from 'tailwind-merge'
import SidebarLayout from '@/components/layouts/SidebarLayout'
import mammoth from 'mammoth'
import { useCommonContext } from '@/state/commonContext'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const { setHtml } = useCommonContext()

  const handleInput = async (event: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true)
    setProgress(0)

    const startTime = Date.now()

    try {
      const file = event.target.files?.[0]
      if (!file) throw new Error('Choose the file')

      const arrayBuffer = await file.arrayBuffer()

      const updateProgress = () =>
        setProgress((prev) => Math.min(prev + 10, 90))

      for (let i = 0; i < 9; i++) {
        updateProgress()
        await new Promise((resolve) => setTimeout(resolve, 300))
      }

      const result = await mammoth.convertToHtml(
        {
          arrayBuffer,
        },
        {
          convertImage: mammoth.images.imgElement(() =>
            Promise.resolve({ src: '', alt: '' })
          ),
        }
      )

      setHtml(result.value)
      setProgress(100)

      const elapsedTime = Date.now() - startTime
      const remainingTime = Math.max(2000 - elapsedTime, 0)

      setTimeout(() => {
        setIsLoading(false)
        router.push('/upload')
      }, remainingTime)
    } catch (error) {
      console.error(error)
      setIsLoading(false)
    }
  }

  return (
    <SidebarLayout>
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
            <Progress value={progress} className="mb-3" />
            <span>{progress}%</span>
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
                <input
                  type="file"
                  accept=".doc, .docx"
                  className="sr-only"
                  onChange={handleInput}
                />
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
    </SidebarLayout>
  )
}
