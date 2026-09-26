import { useEffect, useRef, useState, type ReactNode } from 'react'

type RevealProps = {
    children: ReactNode
}

function Reveal({ children }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true)
                observer.disconnect()
            }
        })

        observer.observe(element)
        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={ref}
            className={isVisible ? 'animate-reveal motion-reduce:animate-none' : 'translate-y-37.5 opacity-0'}
        >
            {children}
        </div>
    )
}

export default Reveal