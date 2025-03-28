import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Kora",
  description: "Generated by Next gen",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section className="w-full">{children}</section>;
}
