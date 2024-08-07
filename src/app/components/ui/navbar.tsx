'use client';

import type { Nav } from '@/app/components/ui/hero-nav';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link';

export default function Navbar({ navs }: { navs: Nav[] }) {
  const pathname = usePathname();

  return (
    <nav className="fixed start-0 top-0 z-20 w-full border-b border-gray-200 bg-gray-800 dark:border-gray-600 dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/bm-high-resolution-logo-transparent.png"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Bipin
          </span>
        </Link>
        <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Download CV
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-sticky"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-gray-800 md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse">
            {navs.map(({ title, href }: Nav) => (
              <li key={title}>
                <Link
                  href={href}
                  className={clsx('block rounded px-3 py-2 md:p-0', {
                    'bg-blue-700 text-white md:bg-transparent md:text-blue-700 md:dark:text-blue-500':
                      pathname === href,
                    'md:hover:bg-transpernt text-gray-200 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500':
                      pathname !== href,
                  })}
                  aria-current="page"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
