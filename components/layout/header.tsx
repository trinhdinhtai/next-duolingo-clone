import Image from "next/image"
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs"
import { Loader } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="mx-auto flex h-full items-center justify-between lg:max-w-screen-lg">
        <div className="flex items-center gap-x-3 py-7 pl-4">
          <Image src="/mascot.svg" height={40} width={40} alt="Mascot" />
          <h1 className="text-2xl font-extrabold tracking-wide text-green-600">
            Lingo
          </h1>
        </div>

        <ClerkLoading>
          <Button size="lg" variant="ghost">
            <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
          </Button>
        </ClerkLoading>

        <ClerkLoaded>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

          <SignedOut>
            <SignInButton
              mode="modal"
              afterSignInUrl="/learn"
              afterSignUpUrl="/learn"
            >
              <Button size="lg" variant="ghost">
                Login
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  )
}
