import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        background: 'var(--background)',
        surface: 'var(--muted)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted-foreground)',
        border: 'var(--border)'
      },
      borderRadius: {
        md: 'var(--radius)'
      }
    }
  },
  plugins: []
};

export default config;
