// The only place to touch when a new build ships.
export const download = {
  version: "2.4.1",
  // Direct link to the Windows installer (.exe or .msi). Leave empty until it exists.
  windowsUrl: "https://github.com/mouviel/artcove/releases/download/setup/artcove-setup-setup.exe",
  // Shown next to the button, e.g. "8.4 MB".
  fileSize: "147 MB",
};

export const isDownloadReady = download.windowsUrl !== "";
