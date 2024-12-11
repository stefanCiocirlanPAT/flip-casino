import EditIcon from '@/assests/icons/EditIcon'
import ActionsRequired from '@/components/actions-required'
import MainLayout from '@/components/layouts/MainLayout'
import Nav from '@/components/nav'
import ReviewSuggestions from '@/components/review-suggestions'
import { Badge } from '@/components/ui/badge'
import { format } from 'date-fns'

export default function Home() {
  return (
    <MainLayout bg={false} className="h-screen">
      <Nav />

      <div className="flex-1 flex flex-col gap-14 pl-24 max-2xl:pl-16 pt-10 pr-5">
        <div className="w-full">
          <Badge size={'lg'}>Requires amendments</Badge>
          <div className="flex items-center justify-between  mt-5 mb-3">
            <div className="flex gap-4 items-center">
              <h1 className="text-32 font-semibold line-clamp-1">
                King Kong Cash - Game Review
              </h1>
              <button type="button">
                <EditIcon className="fill-paplepurple" />
              </button>
            </div>

            <p>
              Overall score: <b>85</b>
            </p>
          </div>
          <time dateTime={`${new Date()}`} className="text-sm">
            Uploaded {format(new Date(), 'do MMMM yyyy')}
          </time>
        </div>

        <div className=" flex-1 flex gap-12 h-[calc(100%-12.5rem)]">
          {/* Content */}
          <div className="flex-1 bg-white text-grey rounded-t-lg">????</div>

          {/* Right col */}
          <ActionsRequired />
          {/* TOOD:Add handle or new page for this component */}
          {/* <ReviewSuggestions /> */}
        </div>
      </div>
    </MainLayout>
  )
}
