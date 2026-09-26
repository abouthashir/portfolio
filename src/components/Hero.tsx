import photo from '../assets/me.jpeg'
import { FaLinkedin, FaSquareInstagram, FaGithub, FaXTwitter } from 'react-icons/fa6'
import type { IconType } from 'react-icons'

type SocialLink = {
    label: string
    href: string
    icon: IconType
}

const socialLinks: SocialLink[] = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/about-hashir', icon: FaLinkedin },
    { label: 'Instagram', href: 'https://www.instagram.com/YOUR-USERNAME', icon: FaSquareInstagram },
    { label: 'Github', href: 'https://github.com/abouthashir', icon: FaGithub },
    { label: 'X', href: 'https://x.com/YOUR-USERNAME', icon: FaXTwitter },
]

type HeroProps = {
    name: string
    intro: string
}

function Hero({ name, intro }: HeroProps) {
    return (
        <section className="flex animate-reveal flex-col items-center gap-8 pt-24 text-center motion-reduce:animate-none">
            <h1 className="text-[76px] leading-[1.1] font-bold tracking-[-0.04em] md:text-[124px] md:leading-none">
                {name}
            </h1>

            <img
                src={photo}
                alt={`Portrait of ${name}`}
                className="size-64 rounded-lg object-cover"
            />

            <p className="text-sm leading-normal text-muted md:w-1/2">
                {intro}
            </p>

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

        </section>
    )
}

export default Hero