import { Inter } from 'next/font/google';

import ToasterContext from '@/context/ToasterContext';

import "@/assets/css/reset.css";
import "@/assets/css/globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Anudeep Gujeeti — Foreign Policy Analyst & Scholar',
  description: 'Writing on India–Japan relations, Indo-Pacific geopolitics, East Asian security, and foreign policy. Assistant Professor, Symbiosis Law School. Ph.D., University of Hyderabad.',
  openGraph: { images: [{ url: 'https://anudeep.gujeeti.com/og.png' }] },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ background: "#020b18", color: "#f1f5f9" }}>
        <ToasterContext />
        {children}
        <div id="portal" />
      </body>
    </html>
  );
}
