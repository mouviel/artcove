import Link from "next/link";
import { Mark } from "@/components/Logo";
import { site } from "@/lib/site";

export function Footer() {
  const links = [
    { label: "Discord", href: site.social.discord },
    { label: "X", href: site.social.x },
    { label: "GitHub", href: site.social.github },
  ].filter((l) => l.href);

  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-4 py-10 text-sm text-pencil sm:flex-row sm:items-center sm:px-6">
        <div className="flex items-center gap-2.5">
          <Mark className="size-5" />
          <span>© {new Date().getFullYear()} artcove</span>
        </div>
        <div className="flex gap-6 sm:ml-auto">
          <Link href="/download" className="hover:text-graphite">
            Download
          </Link>
          {links.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-graphite" target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
