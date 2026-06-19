const navItems = [
  { href: '#hero', label: 'Hero' },
  { href: '#about', label: 'About' },
  { href: '#codepilot', label: 'CodePilot' },
  { href: '#contact', label: 'Contact' },
] as const;

export function StickyNav() {
  return (
    <nav
      className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 overflow-x-auto rounded-full border border-white/10 bg-zinc-950/55 px-2 py-2 shadow-2xl shadow-black/30 backdrop-blur-xl supports-[backdrop-filter]:bg-zinc-950/40"
      aria-label="Primary navigation"
    >
      <div className="flex w-max min-w-full items-center justify-center gap-1">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-full px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-50"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
