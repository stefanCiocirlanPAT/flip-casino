import ActionsRequired from '@/components/actions-required'
import SidebarLayout from '@/components/layouts/SidebarLayout'
import ProjectNameForm from '@/components/project-name-form'
import ReviewSuggestions from '@/components/review-suggestions'
import { Badge } from '@/components/ui/badge'
import { useCommonContext } from '@/state/commonContext'
import { format } from 'date-fns'
import { twMerge } from 'tailwind-merge'

export default function Upload() {
  const { html } = useCommonContext()

  console.log('html', html)

  return (
    <SidebarLayout bg={false}>
      <div className="flex-1 flex flex-col gap-14 pl-24 max-2xl:pl-16 pt-10 pr-5">
        <div className="w-full">
          <Badge size={'lg'}>Requires amendments</Badge>
          <div className="flex items-center justify-between gap-4 mt-5 mb-3">
            <div className="flex-1 flex gap-4 items-center">
              <h1 className="text-32 font-semibold line-clamp-1">
                King Kong Cash - Game Review
              </h1>
              <ProjectNameForm value="King Kong Cash - Game Review" />
            </div>

            <p>
              Overall score: <b>85</b>
            </p>
          </div>
          <time dateTime={`${new Date()}`} className="text-sm">
            Uploaded {format(new Date(), 'do MMMM yyyy')}
          </time>
        </div>

        <div className="flex-1 flex gap-12 h-[calc(100%-12.5rem)]">
          {/* Content */}
          <div
            className={twMerge(
              'flex-1 bg-white text-grey rounded-t-lg px-8 py-10 overflow-auto',
              '[&_h1]:font-bold [&_h1]:text-xl',
              '[&_h2]:font-bold [&_h3]:font-bold [&_h4]:font-bold [&_h5]:font-bold [&_h6]:font-bold',
              '[&>*]:mb-4'
            )}
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {/* Right col */}
          <ActionsRequired />
          {/* TOOD:Add handle or new page for this component */}
          {/* <ReviewSuggestions /> */}
        </div>
      </div>
    </SidebarLayout>
  )
}
