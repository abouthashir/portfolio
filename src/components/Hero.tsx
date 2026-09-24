type HeroProps = {
    name: string
    role: string
    intro: string
}

function Hero({ name, role, intro }: HeroProps) {
    return (
        <section>
            <div>
                <h1>{name}</h1>
                <p>{role}</p>
                <p>{intro}</p>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact Me</a>
            </div>
        </section>
    );
}

export default Hero;