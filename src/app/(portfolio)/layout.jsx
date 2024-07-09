import Navbar from "../components/ui/navbar";

import { navs } from "@/constant";

export default function Layout({ children }) {
  return (
    <div className="container mx-auto px-4">
      <Navbar navs={navs} />

      <div className="mt-20">
      {children}
      </div>
    </div>
  );
}
