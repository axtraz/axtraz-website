import { BookOpen, Globe, Terminal, FileText, KeyRound } from "lucide-react";
import { Github } from "@/components/icons";

export const projects = [
    {
        name: "transpic",
        type: "rust · cli",
        icon: Terminal,
        description:
            "A cross-platform image manipulation CLI coded with Rust.",
        links: [
            { label: "GitHub", href: "https://github.com/axtraz/transpic", icon: Github },
            { label: "Docs", href: "#", icon: BookOpen },
        ],
    },
    {
        name: "pyla note",
        type: "next.js · web",
        icon: FileText,
        description:
            "A minimalist note-taking app for connecting ideas and building a personal knowledge base, with a clean markdown editor.",
        links: [
            { label: "GitHub", href: "https://github.com/axtraz/pyla-note", icon: Github },
            { label: "Site", href: "https://pyla-note.vercel.app/", icon: Globe },
        ],
    },
    {
        name: "passgen",
        type: "go · cli",
        icon: KeyRound,
        description:
            "A CLI password generator built with Go, featuring entropy scoring and customizable generation rules.",
        links: [
            { label: "GitHub", href: "https://github.com/axtraz/passgen", icon: Github },
        ],
    },
    {
        name: "axtraz website",
        type: "next.js · web",
        icon: Globe,
        description: "The home for everything we ship docs, tools, ...",
        links: [{ label: "Site", href: "/", icon: Globe }],
    },
];