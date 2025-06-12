import { ReactNode } from "react";

export default function MasterLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen">
      <main className="flex-1 overflow-y-auto p-8">{children}</main>
    </div>
  );
}
