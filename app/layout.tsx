import '../styles/globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AC3 Bootscreens',
  description: 'Ace Combat 3 Bootscreens',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 