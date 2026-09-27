const blurLevels = [0.078125, 0.15625, 0.3125, 0.625, 1.25, 2.5, 5, 10]

function maskFor(index: number) {
    const step = 12.5
    return `linear-gradient(to bottom, transparent ${index * step}%, black ${(index + 1) * step}%, black ${(index + 2) * step}%, transparent ${(index + 3) * step}%)`
}

function BottomBlur() {
    return (
        <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 -bottom-0.75 z-2 h-46 select-none">
            <div className="absolute inset-0 overflow-hidden">
                {blurLevels.map((blur, index) => (
                    <div
                        key={blur}
                        className="absolute inset-0"
                        style={{
                            zIndex: index + 1,
                            backdropFilter: `blur(${blur}px)`,
                            WebkitBackdropFilter: `blur(${blur}px)`,
                            maskImage: maskFor(index),
                            WebkitMaskImage: maskFor(index),
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

export default BottomBlur