import { useState, useEffect } from 'react'
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTrigger } from '@/components/ui/drawer'
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'
import { ROUTES } from '@/utils/data'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function MobileMenu({ pathname }: { pathname: string }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <Drawer open={isOpen}>
      <DrawerTrigger
        asChild
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="md:hidden"
      >
        <Button variant="outline">
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className={"list-none space-y-6"}>
            {ROUTES.map((item) => {
              return (
                <li key={item.id}>
                  <Link
                    href={item.path}
                    className={cn(
                      "hover:text-primary",
                      pathname === item.path && "text-primary"
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </DrawerHeader>

          <DrawerFooter className={"pb-10"}>
            <Button variant="outline" className="md:hidden mx-auto">
              Get in Touch
            </Button>
          </DrawerFooter>
          <DrawerClose
            onClick={() => setIsOpen(false)}
            className="text-center w-full pb-6 text-accent-foreground"
          >
            Close Menu
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
