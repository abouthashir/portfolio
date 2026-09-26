type Project = {
    title: string
    description: string
}

const projects: Project[] = [
    {
        title: 'ROUTEMATE — Ride-Hailing & Carpooling Platform',
        description: 'C# · ASP.NET Core · SQL Server · EF Core · React | Built a 40+ endpoint ASP.NET Core API with JWT role-based authentication, smart ride matching, driver onboarding, surge pricing, eco-analytics, and real-time ride tracking using React, Tailwind CSS & Leaflet.',
    },
    {
        title: 'LIVESTREAM STUDIO — Dual-Stream Live Video App',
        description: 'C# · ASP.NET Core · SignalR · WebRTC · React (Vite) | Build a real-time dual-stream broadcasting system for webcam and screen sharing using WebRTC, SignalR signaling, and React, with timestamp overlays, host controls, multi-viewer support, and custom offer/answer & ICE exchange.',
    },
    {
        title: 'ZOOTRIC STAY — Luxury Resort Booking Platform',
        description: 'Next.js · React 19 · Supabase · GSAP · Tailwind CSS | Developed a luxury resort booking platform with cinematic GSAP animations, real-time Supabase booking, role-based admin dashboard, and KPI analytics.',
    },
]

function Projects() {
    return (
        <section id="projects" className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <h2 className="text-lg leading-8.5 font-medium">Projects</h2>

            <div className="flex flex-col gap-6 md:w-3/5">
                {projects.map((project) => (
                    <article key={project.title} className="flex flex-col gap-2">
                        <h3 className="text-base text-justify text-title">{project.title}</h3>
                        <p className="text-sm text-justify text-muted">{project.description}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Projects