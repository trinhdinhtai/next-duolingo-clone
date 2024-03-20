import { PropsWithChildren } from "react"

import Sidebar from "@/components/layout/sidebar"

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Sidebar className="hidden lg:flex" />
      <main className="h-full pt-[50px] lg:pl-[256px] lg:pt-0">
        <div className="mx-auto h-full max-w-[1056px] pt-6">{children}</div>
      </main>
    </>
  )
}
