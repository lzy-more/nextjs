import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider, useMessages } from 'next-intl';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default function RootLayout({ children, params: { locale } }: Props) {
  const messages = useMessages();
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
    <html lang={locale} style={{height: "100vh"}}>
      <body >
    {children}</body>
    </html></NextIntlClientProvider>)

}
