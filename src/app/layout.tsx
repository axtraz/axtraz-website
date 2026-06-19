import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://axtraz.vercel.app"),
    title: "Axtraz",
    description:
        "A small collective shipping fast Rust cores, clean CLIs, and the web tools that sit on top of them.",
    icons: {
        icon: "/favicon.ico",
    },
    openGraph: {
        title: "Axtraz",
        description:
            "A small collective shipping fast Rust cores, clean CLIs, and the web tools that sit on top of them.",
        url: "https://axtraz.vercel.app",
        siteName: "Axtraz",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Axtraz",
        description:
            "A small collective shipping fast Rust cores, clean CLIs, and the web tools that sit on top of them.",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(inter.className, "dark")}>{children}</body>
        </html>
    );
}
