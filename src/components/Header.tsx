type HeaderProps = {
    name: string
}

function Header({ name }: HeaderProps) {
    return (
        <header className="flex animate-header-in items-center justify-between py-8 motion-reduce:animate-none">
            <p className="text-lg font-medium">{name}</p>

            <div className="flex items-center gap-4">
                <p className="hidden text-sm text-muted md:block">
                    Open to full-time and contract work
                </p>
                <a
                    href="#contact"
                    className="rounded-lg bg-surface px-3 py-2 text-sm inset-ring inset-ring-border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                >
                    Contacts
                </a>
            </div>
        </header>
    )
}

export default Header