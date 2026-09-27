import Link from "next/link";
import { Logo } from "@/components/Logo";

export function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-rule/80 bg-paper/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center gap-7 px-4 sm:px-6" aria-label="Main">
        <Logo />
        <div className="ml-auto hidden items-center gap-7 text-[15px] text-pencil sm:flex">
          <Link href="/#features" className="hover:text-graphite">
            How it works
          </Link>
          <Link href="/#faq" className="hover:text-graphite">
            Questions
          </Link>
        </div>
        <Link
          href="/download"
          className="ml-auto rounded-lg bg-graphite px-4 py-2 text-sm font-semibold text-white hover:bg-black sm:ml-0"
        >
          Download
        </Link>
      </nav>
    </header>
  );
}
