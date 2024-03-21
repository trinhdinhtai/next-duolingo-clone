import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface FeedHeaderProps {
  title: string
}

export default function FeedHeader({ title }: FeedHeaderProps) {
  return (
    <div className="sticky top-0 mb-5 flex items-center justify-between border-b-2 bg-white pb-3 text-neutral-400 lg:z-50 lg:-mt-7 lg:pt-7">
      <Link
        href="/courses"
        className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
      >
        <ArrowLeft className="h-5 w-5 stroke-2 text-neutral-400" />
      </Link>

      <h1 className="text-lg font-bold">{title}</h1>

      <div />
    </div>
  )
}
