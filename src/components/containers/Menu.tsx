"use client"

import { ROUTES } from "@/utils/data"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export default function Menu() {
  const pathname = usePathname()

  return <header>
    <nav className="mb-10">
      <ul>
        {ROUTES.map((route) => {
          return (<li key={route.id}>
            <Link href={route.path}
              className={cn("hover:text-primary", pathname === route.path ? "text-primary" : '')}
            >{route.name}</Link>
          </li>)
        })}
      </ul>
    </nav>
  </header>
}
