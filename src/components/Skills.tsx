type SkillGroup = {
    title: string
    skills: string[]
}

const skillGroups: SkillGroup[] = [
    { title: 'Frontend', skills: ['React', 'TypeScript', 'JavaScript', 'HTML & CSS', 'Tailwind CSS'] },
    { title: 'Backend', skills: ['C#', 'ASP.NET Core', 'REST APIs'] },
    { title: 'Database', skills: ['SQL Server'] },
    { title: 'Tools', skills: ['Git', 'GitHub', 'VS Code'] },
]

function Skills() {
    return (
        <section id="skills" className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <h2 className="text-lg leading-8.5 font-medium">Skills</h2>

            <div className="flex flex-col gap-6 md:w-3/5">
                {skillGroups.map((group) => (
                    <div key={group.title} className="flex flex-col gap-3">
                        <h3 className="text-base">{group.title}</h3>
                        <ul className="flex flex-wrap gap-x-1 gap-y-2.5">
                            {group.skills.map((skill) => (
                                <li key={skill} className="rounded-lg px-3 py-2 text-sm text-muted inset-ring inset-ring-border">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills