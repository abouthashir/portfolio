import { FaLinkedin, FaSquareInstagram, FaGithub, FaXTwitter } from 'react-icons/fa6'
import type { IconType } from 'react-icons'

type SocialLink = {
    label: string
    href: string
    icon: IconType
}

const socialLinks: SocialLink[] = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/about-hashir', icon: FaLinkedin },
    { label: 'Instagram', href: 'https://www.instagram.com/hashir.co', icon: FaSquareInstagram },
    { label: 'GitHub', href: 'https://github.com/abouthashir', icon: FaGithub },
    { label: 'X', href: 'https://x.com/YOUR-USERNAME', icon: FaXTwitter },
]

function SocialLinks() {
    return (
        <ul className="flex gap-2">
            {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                    <li key={link.label}>
                        <a
                            href={link.href}
                            aria-label={link.label}
                            className="block p-0.5 text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                        >
                            <Icon className="size-6" aria-hidden="true" />
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}

export default SocialLinks