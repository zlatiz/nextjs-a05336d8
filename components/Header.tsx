import Image from 'next/image';
import React from 'react';

const NAV = [
  { href: 'https://johnkeanestudios.com/', label: 'Home' },
  { href: 'https://johnkeanestudios.com/html/about', label: 'About' },
  { href: 'https://johnkeanestudios.com/html/discography', label: 'Discography' },
  { href: 'https://johnkeanestudios.com/html/recordingservices', label: 'Recording Services' },
  { href: 'https://johnkeanestudios.com/html/clientlist', label: 'Client List' },
  { href: 'https://johnkeanestudios.com/html/equipment', label: 'Equipment' },
  { href: 'https://johnkeanestudios.com/html/clips', label: 'Music Clips' },
  { href: 'https://johnkeanestudios.com/html/photos', label: 'Photos' },
  { href: 'https://johnkeanestudios.com/html/contact', label: 'Contact' }
];

export default function Header(): JSX.Element {
  const banner = encodeURI('https://johnkeanestudios.com/Images/StudioBanner.png');

  return (
    <header className="sticky top-0 z-30 header-glass">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center">
            <Image src={banner} alt="John Keane Studios.com" unoptimized width={120} height={40} className="object-contain rounded-md" />
          </div>
          <div className="ml-2 text-sm font-semibold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>John Keane</div>
        </div>

        <nav>
          <ul className="hidden md:flex items-center gap-4">
            {(Array.isArray(NAV) ? NAV : []).map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm px-3 py-2 rounded-md hover:bg-white/5">{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="md:hidden text-sm">Menu</div>
        </nav>
      </div>
    </header>
  );
}
