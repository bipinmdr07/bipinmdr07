"use client"

import { ROUTES } from "@/utils/data"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Button } from "../ui/button"
import MobileMenu from "./MobileMenu"

export default function Menu() {
  const pathname = usePathname()

  return <header className={cn("fixed z-50 left-0 right-0", pathname !== '/' && "bg-background border-b border-border/25")}>
    <nav className="container py-4 flex justify-between items-center">
      {/* Logo */}
      <Link href={'/'}>
        <Image
          alt="hero"
          width={60}
          src={"/logo.png"}
          height={45}
        />
      </Link>

      {/* web menus */}
      <ul className="md:flex hidden items-center text-[17px] gap-6 font-medium">
        {ROUTES.map((route) => {
          return (<li key={route.id}>
            <Link href={route.path}
              className={cn("hover:text-primary", pathname === route.path && "text-primary" )}
            >{route.name}</Link>
          </li>)
        })}
      </ul>

      {/* button */}
      <Button variant="outline" className="md:inline-block hidden">Get in Touch</Button>

      {/* mobile menu */}
      <MobileMenu pathname={pathname} />

    </nav>
  </header>
}
