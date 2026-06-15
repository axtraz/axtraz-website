"use client";

import { motion } from "motion/react";
import { Github } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

const stack = [
    { group: "systems", items: ["Rust", "napi-rs", "Cargo"] },
    { group: "web", items: ["TypeScript", "Next.js", "Tailwind", "shadcn/ui"] },
    { group: "tooling", items: ["pnpm", "GitHub Actions", "oxlint"] },
];

export default function Home() {
    return (
        <main className="relative bg-zinc-950 text-zinc-200">
            <div
                className="pointer-events-none fixed inset-0 -z-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]"
                aria-hidden
            />
            <section
                id="home"
                className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-20 text-center sm:px-10"
            >
                <div
                    className="absolute top-1/2 left-1/2 -z-10 h-[480px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-emerald-500/10 via-zinc-500/5 to-transparent blur-3xl"
                    aria-hidden
                />
                <motion.h1
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-6 text-[clamp(3.5rem,12vw,7.5rem)] leading-[0.95] font-bold tracking-tight text-zinc-50"
                >
                    Axtraz
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-8 max-w-xl text-lg text-balance text-zinc-400"
                >
                    A small collective shipping fast Rust cores, clean CLIs, and the web tools that sit on top of them —
                    built first for ourselves, then for anyone who finds them useful.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-10 flex flex-wrap items-center justify-center gap-3"
                >
                    <Button
                        asChild
                        className="h-auto rounded-xl bg-zinc-100 px-5 py-2.5 font-medium text-zinc-950 hover:bg-zinc-200"
                    >
                        <a href="#projects">Explore projects</a>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        className="h-auto rounded-xl border-white/10 bg-zinc-900/60 px-5 py-2.5 font-medium text-zinc-200 hover:bg-zinc-800"
                    >
                        <a
                            href="https://github.com/axtraz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5"
                        >
                            <Github className="h-3.5 w-3.5" />
                            GitHub
                        </a>
                    </Button>
                </motion.div>
            </section>
            <section id="projects" className="border-t border-white/5 px-6 py-24 sm:px-10 lg:px-16">
                <div className="mx-auto w-full max-w-5xl">
                    <h2 className="text-center text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl">Projects</h2>
                    <p className="mt-4 text-center text-zinc-500">Tools we build and maintain in the open.</p>

                    <div className="mt-14 flex flex-col border-t border-white/5">
                        {projects.map((project, i) => {
                            const Icon = project.icon;
                            return (
                                <motion.div
                                    key={project.name}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                                    className="group flex flex-col gap-4 border-b border-white/5 py-6 transition-colors sm:flex-row sm:items-center sm:gap-8"
                                >
                                    <div className="flex items-center gap-4 sm:w-56">
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-300 transition-colors group-hover:text-emerald-400">
                                            <Icon className="h-4 w-4" />
                                        </span>
                                        <div>
                                            <h3 className="text-lg font-semibold text-zinc-100">{project.name}</h3>
                                            <p className="font-mono text-[11px] tracking-wider text-zinc-600 uppercase">
                                                {project.type}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="flex-1 text-sm leading-relaxed text-zinc-400">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 sm:shrink-0">
                                        {project.links.map(link => {
                                            const LinkIcon = link.icon;
                                            return (
                                                <a
                                                    key={link.label}
                                                    href={link.href}
                                                    target={link.href.startsWith("http") ? "_blank" : undefined}
                                                    rel={
                                                        link.href.startsWith("http") ? "noopener noreferrer" : undefined
                                                    }
                                                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-zinc-300 transition-colors hover:bg-white/5 hover:text-zinc-100"
                                                >
                                                    <LinkIcon className="h-3.5 w-3.5" />
                                                    {link.label}
                                                </a>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <section id="about" className="border-t border-white/5 px-6 py-24 sm:px-10 lg:px-16">
                <div className="mx-auto grid w-full max-w-4xl gap-12 lg:grid-cols-[1.2fr_1fr]">
                    <div>
                        <p className="text-xs font-medium tracking-[0.2em] text-zinc-500 uppercase">About</p>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
                            Built in the open,
                            <br />
                            from the inside out.
                        </h2>
                        <p className="mt-6 max-w-md text-zinc-400">
                            Axtraz is a small open-source organization based in France. We care about the layer
                            underneath: fast cores, clear interfaces, and tools that don&apos;t get in your way.
                            Everything we ship starts as something we wanted to use ourselves.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">
                        {stack.map(({ group, items }) => (
                            <div key={group}>
                                <p className="text-xs font-medium tracking-[0.2em] text-zinc-500 uppercase">{group}</p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {items.map(item => (
                                        <span
                                            key={item}
                                            className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
