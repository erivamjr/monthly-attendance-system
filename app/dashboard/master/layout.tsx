import { ReactNode } from "react";
import { MasterSidebar } from "@/components/master/MasterSidebar";

export default function MasterLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen">
      <MasterSidebar />
      <main className="flex-1 overflow-y-auto bg-gray-100 p-8">{children}</main>
    </div>
  );
}
