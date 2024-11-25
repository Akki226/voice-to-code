// app/layout.tsx
import 'regenerator-runtime/runtime';
import './globals.css';

export const metadata = {
  title: 'Voice-to-Code',
  description: 'Simple Next.js App for Code Generation from Voice Input',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">{children}</body>
    </html>
  );
}
