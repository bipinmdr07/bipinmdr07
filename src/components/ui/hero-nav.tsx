export type Nav = {
  title: string,
  pathname: string,
  icon: string,
}

export const HeroNav = ({ navs }: {
  navs: Nav[]
}) => {

  return (
    <div className="grid sm:flex gap-3 mt-8">
      {navs.map((nav, index) => (
        <div className="py-2.5 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800" key={index}>
          <a href={nav.pathname} className="flex px-3 items-center justify-center w-full h-full hover:text-violet-400">
            <div className="flex items-center justify-center w-full h-full">
              <span className="text-sm font-bold">{nav.title}</span>
            </div>
          </a>
        </div>
      ))}
    </div>
  )
}
