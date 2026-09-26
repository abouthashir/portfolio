import SocialLinks from './SocialLinks'

type FooterProps = {
    name: string
    email: string
}

function Footer({ name, email }: FooterProps) {
    return (
        <footer className="mt-24 flex flex-col gap-6 py-8 md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col gap-2">
                <p className="text-lg font-medium">{name}</p>
                <p className="text-sm text-muted">Open to full-time and contract work</p>
            </div>

            <div className="flex flex-col items-start gap-3">
                <a
                    href={`mailto:${email}`}
                    className="text-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                >
                    {email}
                </a>
                <SocialLinks />
            </div>
        </footer>
    )
}

export default Footer