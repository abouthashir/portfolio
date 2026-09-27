type Job = {
    company: string
    period: string
    role: string
    summary: string
    highlights: string[]
}

const jobs: Job[] = [
    {
        company: 'Zootric LLP',
        period: '2025 — Present',
        role: 'Freelance Full Stack Developer',
        summary: 'Developed custom web applications for clients across fintech and e-commerce, working on both frontend and backend systems.',
        highlights: [
            'Collaborated with clients to understand project requirements and deliver tailored web solutions',
            'Built and maintained scalable backend systems using ASP.NET Core and SQL Server, implementing REST APIs for data access and business logic',
            'Developed responsive and user-friendly frontend interfaces with React and TypeScript, improving user engagement and satisfaction',
            'Implemented authentication, data validation, and secure coding practices to ensure application reliability and data integrity',
            'Participated in code reviews, testing, and deployment processes to deliver high-quality software products on schedule',
        ],
    },
]

function WorkHistory() {
    return (
        <section id="experience" className="flex flex-col gap-16">
            <h2 className="text-5xl leading-[1.2] font-bold tracking-[-0.04em] md:leading-none">Work history</h2>

            {jobs.map((job) => (
                <article key={job.company + job.period} className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div className="flex flex-col">
                        <h3 className="text-lg leading-8.5 font-medium">{job.company}</h3>
                        <p className="text-sm leading-8.5 text-muted">{job.period}</p>
                    </div>

                    <div className="flex flex-col gap-3 md:w-3/5">
                        <p className="text-base text-title">{job.role}</p>
                        <p className="text-sm text-muted">{job.summary}</p>
                        <ul className="flex flex-col gap-3">
                            {job.highlights.map((highlight) => (
                                <li key={highlight} className="flex text-sm text-muted">
                                    <span aria-hidden="true" className="w-4 shrink-0 text-base leading-[1.2] tracking-normal">•</span>
                                    {highlight}
                                </li>
                            ))}
                        </ul>
                    </div>
                </article>
            ))}
        </section>
    )
}

export default WorkHistory