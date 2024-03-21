import FeedHeader from "@/components/feed-header"
import FeedWrapper from "@/components/feed-wrapper"
import { StickyWrapper } from "@/components/sticky-wrapper"
import UserProgress from "@/components/user-progress"

export default function LearnPage() {
  return (
    <div className="flex flex-row-reverse gap-6 px-6">
      <StickyWrapper>
        <UserProgress />
      </StickyWrapper>

      <FeedWrapper>
        <FeedHeader title="header" />
        <div className="h-[2000px]"></div>
      </FeedWrapper>
    </div>
  )
}
