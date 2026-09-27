"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { download, isDownloadReady } from "@/lib/download";

function WindowsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M3 5.5 10.5 4.4v7.1H3V5.5Zm0 13 7.5 1.1v-7H3v5.9Zm8.4 1.2L21 21v-8.4h-9.6v7.1Zm0-15.4v7.2H21V3l-9.6 1.3Z" />
    </svg>
  );
}

// Server render assumes Windows so the note never flickers for the main audience.
const subscribe = () => () => {};
const isWindowsClient = () => /Windows/i.test(navigator.userAgent);
const isWindowsServer = () => true;

export function DownloadButton({ showMeta = true }: { showMeta?: boolean }) {
  const onWindows = useSyncExternalStore(subscribe, isWindowsClient, isWindowsServer);

  const className =
    "inline-flex items-center gap-3 rounded-xl bg-graphite px-6 py-4 text-base font-semibold text-white shadow-[0_10px_24px_-12px_rgba(33,34,39,.6)] transition-colors hover:bg-black";
  const label = (
    <>
      <WindowsIcon className="size-5" />
      Download for Windows
    </>
  );

  const meta = `Version ${download.version} for Windows 10 and 11${download.fileSize ? `, ${download.fileSize}` : ""}`;

  return (
    <div className="flex flex-col items-start gap-3">
      {isDownloadReady ? (
        <a href={download.windowsUrl} className={className} download>
          {label}
        </a>
      ) : (
        <Link href="/download" className={className}>
          {label}
        </Link>
      )}
      {showMeta && (
        <p className="text-sm text-pencil">{onWindows ? meta : "artcove runs on Windows for now. Grab it on your PC."}</p>
      )}
    </div>
  );
}
