import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface UserProgress {}

export default function UserProgress() {
  return (
    <div className="flex w-full items-center justify-between gap-x-2">
      <Link
        href="/courses"
        className={cn(buttonVariants({ variant: "ghost" }))}
      >
        {/* TODO: replace with actual course title and icon */}
        <Image
          src="/es.svg"
          alt="course title"
          className="rounded-md border"
          width={32}
          height={32}
        />
      </Link>

      <Link
        href="/shop"
        className={cn(buttonVariants({ variant: "ghost" }), "text-orange-500")}
      >
        <Image
          src="/points.svg"
          height={28}
          width={28}
          alt="Points"
          className="mr-2"
        />
        {/* TODO: replace with actual points */}
        {25}
      </Link>

      <Link
        href="/shop"
        className={cn(buttonVariants({ variant: "ghost" }), "text-rose-500")}
      >
        <Image
          src="/heart.svg"
          height={22}
          width={22}
          alt="Hearts"
          className="mr-2"
        />
        {/* TODO: replace with actual heart */}
        {25}
      </Link>
    </div>
  )
}
