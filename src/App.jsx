import React, { useMemo, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import WhatSection from "./components/WhatSection.jsx";
import InstallSection from "./components/InstallSection.jsx";
import UseSection from "./components/UseSection.jsx";
import PrivacySection from "./components/PrivacySection.jsx";
import FinalCta from "./components/FinalCta.jsx";
import Footer from "./components/Footer.jsx";
import DownloadModal from "./components/DownloadModal.jsx";
import AdSlot from "./components/AdSlot.jsx";
import InContentAd from "./components/InContentAd.jsx";
import { ZIP_BASE64, ZIP_FILENAME } from "./data/zipData.js";

function triggerDownload() {
  const link = document.createElement("a");
  link.href = "data:application/zip;base64," + ZIP_BASE64;
  link.download = ZIP_FILENAME;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const zipSizeLabel = useMemo(() => {
    const bytes = Math.round((ZIP_BASE64.length * 3) / 4);
    return (bytes / 1024).toFixed(1) + " KB";
  }, []);

  return (
    <>
      <Navbar onDirectDownload={triggerDownload} />

      <div className="page-shell">
        <AdSlot side="left" />

        <main className="wrap">
          <Hero zipSizeLabel={zipSizeLabel} onOpenModal={() => setModalOpen(true)} />
          <InContentAd />
          <WhatSection />
          <InstallSection />
          <InContentAd />
          <UseSection />
          <PrivacySection />
          <InContentAd />
          <FinalCta onOpenModal={() => setModalOpen(true)} />
          <Footer />
        </main>

        <AdSlot side="right" />
      </div>

      <DownloadModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onDownload={triggerDownload}
      />
    </>
  );
}