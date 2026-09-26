type ContactItem = {
    label: string
    value: string
    href?: string
}

const contactItems: ContactItem[] = [
    { label: 'Email', value: 'abouthashir@gmail.com', href: 'mailto:abouthashir@gmail.com' },
    { label: 'Location', value: 'Vythiri, Wayanad, Kerala, India' },
]

function Contact() {
    return (
        <section id="contact" className="flex flex-col gap-16">
            <h2 className="text-5xl leading-[1.2] font-bold tracking-[-0.04em] md:leading-none">Contacts</h2>

            <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-16">
                <dl className="order-last flex flex-col gap-6 md:order-first md:flex-1">
                    {contactItems.map((item) => (
                        <div key={item.label} className="flex flex-col gap-1">
                            <dt className="text-lg leading-8.5 font-medium">{item.label}</dt>
                            <dd className="text-sm text-muted">
                                {item.href ? (
                                    <a href={item.href} className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground">
                                        {item.value}
                                    </a>
                                ) : (
                                    item.value
                                )}
                            </dd>
                        </div>
                    ))}
                </dl>

                <p className="text-sm text-muted md:w-3/5">
                    I'm currently open to new opportunities, consulting projects, and meaningful collaborations. If you have a project in mind or would like to discuss how I can contribute to your team, I'd be happy to hear from you.
                </p>
            </div>
        </section>
    )
}

export default Contact