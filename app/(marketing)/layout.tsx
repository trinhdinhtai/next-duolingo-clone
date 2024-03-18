import { PropsWithChildren } from "react"

import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"

export default function MarketingLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  )
}
