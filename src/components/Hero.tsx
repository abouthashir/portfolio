import photo from '../assets/me.jpeg'
import SocialLinks from './SocialLinks'

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
            <SocialLinks />
        </section>
    )
}

export default Hero