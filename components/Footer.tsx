import React from 'react';

const FOOTER_NAV = [
  { href: 'https://johnkeanestudios.com/html/about', label: 'About' },
  { href: 'https://johnkeanestudios.com/html/contact', label: 'Contact' },
  { href: 'https://johnkeanestudios.com/html/discography', label: 'Discography' }
];

export default function Footer(): JSX.Element {
  return (
    <footer className="w-full border-t border-border mt-8 bg-[rgba(0,0,0,0.3)]">
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="text-sm font-semibold">John Keane Studios</h4>
          <p className="text-xs text-muted mt-2">Copyright 2011, johnkeanestudios.com</p>
        </div>
        <div>
          <h5 className="text-sm font-semibold">Navigation</h5>
          <ul className="mt-2 text-sm space-y-1">
            {(Array.isArray(FOOTER_NAV) ? FOOTER_NAV : []).map((link) => (
              <li key={link.href}><a href={link.href} className="hover:underline">{link.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-semibold">Studio</h5>
          <p className="text-xs text-muted mt-2">Professional recording studio and producer.</p>
        </div>
      </div>
    </footer>
  );
}
