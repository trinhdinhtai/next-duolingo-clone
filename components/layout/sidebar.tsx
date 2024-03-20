import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { SidebarItem } from "@/components/layout/sidebar-item"

interface SidebarProps {
  className?: string
}

export default function Sidebar({ className }: SidebarProps) {
  const sidebarItems = [
    {
      label: "Learn",
      iconSrc: "/learn.svg",
      href: "/learn",
    },
    {
      label: "Leaderboard",
      href: "/leaderboard",
      iconSrc: "/leaderboard.svg",
    },
    {
      label: "quests",
      href: "/quests",
      iconSrc: "/quests.svg",
    },
    {
      label: "shop",
      href: "/shop",
      iconSrc: "/shop.svg",
    },
  ]
  return (
    <div
      className={cn(
        "lg:w[256px] left-0 top-0 flex h-full flex-col border-r-2 px-4 lg:fixed",
        className
      )}
    >
      <Link href="/learn">
        <div className="flex items-center gap-x-3 pb-7 pl-4 pt-8">
          <Image src="/mascot.svg" height={40} width={40} alt="Mascot" />
          <h1 className="text-2xl font-extrabold tracking-wide text-green-600">
            Lingo
          </h1>
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-y-2">
        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.href}
            label={item.label}
            href={item.href}
            iconSrc={item.iconSrc}
          />
        ))}
      </div>
    </div>
  )
}
