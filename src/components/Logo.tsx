"use client";

import { Palette } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Mark({ className = "size-7" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`grid shrink-0 place-items-center rounded-[25%] bg-graphite text-white ${className}`}>
      <Palette className="size-[62%]" strokeWidth={2.25} />
    </span>
  );
}

export function Logo() {
  const pathname = usePathname();

  return (
    <Link
      href="/"
      aria-label="artcove home"
      className="flex items-center gap-2.5"
      onClick={(e) => {
        // Already home: go back to the top instead of doing nothing.
        if (pathname === "/") {
          e.preventDefault();
          window.scrollTo({ top: 0 });
        }
      }}
    >
      <Mark />
      <span className="text-[21px] leading-none font-bold tracking-[-0.03em]">artcove</span>
    </Link>
  );
}
