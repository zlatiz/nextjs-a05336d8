import Image from 'next/image';
import React from 'react';
import Card from '../components/ui/card';

const STUDIO_BANNER = 'https://johnkeanestudios.com/Images/StudioBanner.png';
const KEANE_PHOTO = 'https://johnkeanestudios.com/Images/j.keane2.jpg';
const CONSOLE_PHOTO = 'https://johnkeanestudios.com/Images/console.JPG';

export default function HomePage(): JSX.Element {
  const safeBanner = encodeURI(STUDIO_BANNER);
  const safeKeane = encodeURI(KEANE_PHOTO);
  const safeConsole = encodeURI(CONSOLE_PHOTO);

  return (
    <div className="w-full">
      {/* Hero - full-bleed */}
      <section className="w-full relative">
        <div className="hero-gradient w-full h-[420px] flex items-center justify-center overflow-hidden">
          <Image src={safeBanner} alt="John Keane Studios.com" unoptimized width={1600} height={420} className="object-cover w-full h-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="glass-card px-6 py-4 max-w-3xl text-center">
              <h1 style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-3xl md:text-4xl font-bold">Welcome to John Keane Studios</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content grid - images and small cards using provided images */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="John Keane Studios.com" imageSrc={safeKeane} imageAlt="KeanePhoto" width={600} height={400} />
        <Card title="KeanePhoto" imageSrc={safeKeane} imageAlt="KeanePhoto" width={600} height={400} />
        <Card title="studio2" imageSrc={safeConsole} imageAlt="studio2" width={600} height={400} />
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-20">
        <p className="text-sm text-muted">Copyright 2011, johnkeanestudios.com</p>
      </section>
    </div>
  );
}
