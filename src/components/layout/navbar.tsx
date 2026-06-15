"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Axtraz from "@/../public/axtraz.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Github } from "../icons";

const links = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
];

export default function Navbar() {
    const [active, setActive] = useState("Home");

    return (
        <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-4 sm:px-4">
            <nav className="flex w-full max-w-3xl items-center justify-between gap-2 rounded-full border border-white/10 bg-zinc-950/70 px-2.5 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:px-4">
                <Link href="/" className="flex shrink-0 items-center gap-2 rounded-full px-1.5 py-1.5 sm:px-2">
                    <Image src={Axtraz.src} alt="Axtraz Logo" width={40} height={40} className="rounded-full" />
                    <span className="text-sm font-medium tracking-tight text-zinc-100">Axtraz</span>
                </Link>
                <ul className="hidden items-center gap-1 rounded-full border border-white/5 bg-zinc-900/60 p-1 md:flex">
                    {links.map(link => (
                        <li key={link.label}>
                            <Button
                                asChild
                                variant={active === link.label ? "default" : "ghost"}
                                size="sm"
                                className={`rounded-full text-sm font-medium ${
                                    active === link.label
                                        ? "bg-zinc-100 text-zinc-950 hover:bg-zinc-200"
                                        : "text-zinc-400 hover:bg-transparent hover:text-zinc-100"
                                } `}
                            >
                                <Link href={link.href} onClick={() => setActive(link.label)}>
                                    {link.label}
                                </Link>
                            </Button>
                        </li>
                    ))}
                </ul>
                <a
                    href="https://github.com/axtraz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:block"
                >
                    <Button asChild size="icon-sm" variant="ghost">
                        <Github />
                    </Button>
                </a>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-9 w-9 rounded-full border-white/10 bg-zinc-900/60 text-zinc-200 hover:bg-zinc-800 md:hidden"
                        >
                            <Menu className="h-4 w-4" />
                        </Button>
                    </SheetTrigger>

                    <SheetContent
                        side="right"
                        showCloseButton={false}
                        className="flex w-[80%] flex-col gap-0 border-white/10 bg-zinc-950/95 p-4 backdrop-blur-xl sm:w-[320px]"
                    >
                        <SheetTitle className="flex items-center justify-between gap-2 text-zinc-100">
                            <span className="flex items-center gap-2">
                                <Image
                                    src={Axtraz.src}
                                    alt="Axtraz Logo"
                                    width={30}
                                    height={30}
                                    className="rounded-full"
                                />
                                Axtraz
                            </span>
                            <a href="https://github.com/axtraz" target="_blank" rel="noopener noreferrer">
                                <Button asChild size="icon-sm" variant="ghost">
                                    <Github />
                                </Button>
                            </a>
                        </SheetTitle>

                        <div className="mt-12 flex flex-col gap-1">
                            {links.map(link => (
                                <SheetClose asChild key={link.label}>
                                    <Button
                                        asChild
                                        variant={active === link.label ? "default" : "ghost"}
                                        className={`h-auto justify-start rounded-xl px-4 py-2.5 text-sm font-medium ${
                                            active === link.label
                                                ? "bg-zinc-100 text-zinc-950 hover:bg-zinc-200"
                                                : "text-zinc-300 hover:bg-zinc-900"
                                        } `}
                                    >
                                        <a href={link.href} onClick={() => setActive(link.label)}>
                                            {link.label}
                                        </a>
                                    </Button>
                                </SheetClose>
                            ))}
                        </div>

                        <div className="mt-auto pt-4">
                            <SheetFooter>
                                <SheetClose asChild>
                                    <Button
                                        className="h-auto w-full rounded-xl py-2.5 font-medium"
                                        variant="destructive"
                                    >
                                        Close
                                    </Button>
                                </SheetClose>
                            </SheetFooter>
                        </div>
                    </SheetContent>
                </Sheet>
            </nav>
        </header>
    );
}
