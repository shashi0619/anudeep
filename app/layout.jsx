import { Inter } from 'next/font/google';
import "@/assets/css/reset.css";
import "@/assets/css/globals.css";
import ToasterContext from '@/context/ToasterContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Anudeep Gujeeti — Foreign Policy Analyst & Scholar',
  description: 'Writing on India–Japan relations, Indo-Pacific geopolitics, East Asian security, and foreign policy. Assistant Professor, Symbiosis Law School. Ph.D., University of Hyderabad.',
  openGraph: { images: [{ url: 'https://blog.sergiordg.com/share.jpg' }] },
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
