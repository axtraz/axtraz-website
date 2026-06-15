import { ArrowUpRight, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-white/5 px-6 py-10 sm:px-10 lg:px-16">
            <div className="mx-auto flex w-full max-w-4xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                <p className="flex items-center gap-2 text-xs text-zinc-500">
                    <MapPin className="size-4" />
                    France
                </p>

                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/axtraz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                    >
                        github.com/axtraz
                        <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                </div>

                <p className="text-xs text-zinc-600">© 2026 Axtraz</p>
            </div>
        </footer>
    );
}
