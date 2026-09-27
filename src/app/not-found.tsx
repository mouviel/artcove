import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[1200px] px-4 py-28 sm:px-6 lg:py-36">
        <p className="font-hand text-2xl font-semibold text-red-ink -rotate-2">nope, not here</p>
        <h1 className="mt-4 max-w-2xl text-5xl leading-[1.02] font-bold tracking-[-0.04em] sm:text-6xl">This page isn&apos;t in the queue.</h1>
        <p className="mt-6 max-w-md text-lg text-pencil">The link might be old or mistyped.</p>
        <Link href="/" className="mt-10 inline-block rounded-xl bg-graphite px-6 py-4 font-semibold text-white hover:bg-black">
          Go to the home page
        </Link>
      </main>
      <Footer />
    </>
  );
}
