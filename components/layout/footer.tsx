import Image from "next/image"

import { Button } from "@/components/ui/button"

export default function Footer() {
  const languages = [
    { name: "Croatian", icon: "/hr.svg" },
    { name: "Spanish", icon: "/es.svg" },
    { name: "French", icon: "/fr.svg" },
    { name: "Italian", icon: "/it.svg" },
    { name: "Japanese", icon: "/jp.svg" },
  ]
  return (
    <footer className="hidden h-20 w-full border-t-2 border-slate-200 p-2 lg:block">
      <div className="mx-auto flex h-full max-w-screen-lg items-center justify-evenly">
        {languages.map((language) => (
          <Button key={language.name} size="lg" variant="ghost">
            <Image
              src={language.icon}
              alt={language.name}
              height={32}
              width={40}
              className="mr-4 rounded-md"
            />
            {language.name}
          </Button>
        ))}
      </div>
    </footer>
  )
}
