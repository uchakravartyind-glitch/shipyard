import type { Metadata } from "next";
import Link from "next/link";
import { Geist } from "next/font/google";
import "./globals.css";
import "./optimized.css";
const geist = Geist({ subsets: ["latin"], display: "swap" });
export const metadata: Metadata = { title:"ShipYard — Goods for everyday voyages", description:"A curated catalog of well-made everyday goods." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className={geist.className}><body><header><nav><Link className="brand" href="/">SHIPYARD</Link><Link href="/#catalog">Catalog</Link></nav></header>{children}<footer><strong>SHIPYARD</strong><span>Built for everyday voyages.</span></footer></body></html>; }
