"use client"

import { ROUTES } from "@/utils/data"
import Link from "next/link"

export default function Menu() {
  return  <header>
    <nav className="mb-10">
      <ul>
        { ROUTES.map((route) => {
          return <li key={route.id}>
            <Link href={route.path}>{route.name}</Link>
          </li>
        }) }
      </ul>
    </nav>
  </header>
}
