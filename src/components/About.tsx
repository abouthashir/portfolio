function About() {
    return (
        <section id="about" className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <h2 className="text-lg leading-8.5 font-medium">About</h2>

            <div className="flex flex-col gap-6 md:w-3/5">
                <p className="text-sm text-muted">
                    I’m a Full-Stack Developer passionate about building clean, scalable digital experiences. I work with React, TypeScript, C#, ASP.NET Core, SQL Server, and REST APIs, and enjoy turning ideas into practical, real-world products.

                </p>
                <p className="text-sm text-muted">
                    I care about writing clean, maintainable code, creating intuitive user experiences, and building applications that are reliable and performant. I’m continuously learning modern technologies and enjoy exploring new ideas, improving my development skills, and working on personal projects.

                </p>
            </div>
        </section>
    )
}

export default About