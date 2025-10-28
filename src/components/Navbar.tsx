import { useCallback, useEffect, useMemo, useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("#inicio");

    const links = useMemo(
        () => [
            { href: "#inicio", label: "Início" },
            { href: "#servicos", label: "Serviços" },
            { href: "#projetos", label: "Projetos" },
            { href: "#sobre", label: "Sobre" },
            { href: "#skills", label: "Skills" },
            { href: "#linkedin", label: "Linkedin" },
        ],
        []
    );

    const handleNavClick = useCallback((e: React.MouseEvent, href: string) => {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            setActive(href);
        }
        setOpen(false);
    }, []);

    useEffect(() => {
        const ids = links.map((l) => l.href);
        const sections = ids
            .map((id) => document.querySelector(id))
            .filter(Boolean) as Element[];

        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
                if (visible?.target?.id) {
                    setActive(`#${visible.target.id}`);
                }
            },
            {
                root: null,
                threshold: [0.3, 0.6],
                rootMargin: "-10% 0px -70% 0px",
            }
        );

        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, [links]);

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-white/60 backdrop-blur-md">
            <nav className="container mx-auto flex max-w-5xl items-center justify-between p-3">
                <a href="#inicio" onClick={(e) => handleNavClick(e, "#inicio")} className="flex items-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 font-bold text-white">
                        VB
                    </span>
                    <span className="font-headline text-sm font-semibold text-gray-800">Portfólio</span>
                </a>

                <button
                    className="md:hidden rounded-md px-3 py-2 text-sm text-gray-700 ring-1 ring-gray-300"
                    onClick={() => setOpen((v) => !v)}
                    aria-label="Abrir menu"
                >
                    Menu
                </button>

                <ul className="hidden items-center gap-4 md:flex">
                    {links.map((link) => (
                        <li key={link.href} className="group">
                            <a
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`text-sm font-medium transition ${active === link.href ? "text-blue-700" : "text-gray-800 hover:text-blue-700"
                                    }`}
                            >
                                {link.label}
                            </a>
                            <span
                                className={`block h-0.5 rounded bg-blue-600 transition-all duration-300 ${active === link.href ? "w-full" : "w-0 group-hover:w-full"
                                    }`}
                            />
                        </li>
                    ))}
                </ul>
            </nav>

            {open && (
                <div className="md:hidden">
                    <ul className="space-y-2 border-t border-white/10 bg-white/70 p-3 backdrop-blur">
                        {links.map((link) => (
                            <li key={`m-${link.href}`}>
                                <a
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className={`block rounded-md px-3 py-2 text-sm font-medium transition ${active === link.href ? "text-blue-700" : "text-gray-800 hover:bg-white"
                                        }`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}