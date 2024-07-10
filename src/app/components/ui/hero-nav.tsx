import Link from 'next/link';

export type Nav = {
  title: string;
  href: string;
  icon: string;
};

export const HeroNav = ({ navs }: { navs: Nav[] }) => {
  return (
    <div className="mt-8 grid gap-3 sm:flex">
      {navs.map((nav, index) => (
        <div
          className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg px-3 py-2.5 text-sm font-medium shadow-sm disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
          key={index}
        >
          <Link
            href={nav.href}
            className="flex h-full w-full items-center justify-center px-3 hover:text-violet-400"
          >
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-sm font-bold">{nav.title}</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
