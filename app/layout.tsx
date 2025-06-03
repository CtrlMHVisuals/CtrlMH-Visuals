import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Ctrl+MH Visuals',
  description: 'Creative portfolio website for Ctrl+MH Visuals',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}