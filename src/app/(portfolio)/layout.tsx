import Navbar from '../components/ui/navbar';

import { navs } from '@/constant';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto">
      <Navbar navs={navs} />

      <div>{children}</div>
    </div>
  );
}
