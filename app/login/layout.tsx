import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Sistema de Frequência",
  description: "Faça login no Sistema de Frequência",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
