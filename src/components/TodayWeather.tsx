import sunSrc from "../assets/images/icon-sunny.webp";

export default function TodayWeather({ isLoading }: { isLoading?: boolean }) {
    return (
        <section>
            <div className="rounded-20 flex h-143 flex-col items-center justify-center gap-8 bg-[url('./assets/images/bg-today-small.svg')] bg-cover md:flex-row md:justify-between md:bg-[url('./assets/images/bg-today-large.svg')] md:px-12">
                <div className="flex flex-col items-center gap-6 md:items-start">
                    <span className="text-4 font-bold text-white">
                        Berlin, Germany
                    </span>
                    <span className="text-6 text-white/80">
                        Tuesday, Aug 5, 2025
                    </span>
                </div>

                <div className="flex items-center gap-10">
                    <img src={sunSrc} alt="" className="size-60" />
                    <span className="text-1 font-semibold text-white italic">
                        20°
                    </span>
                </div>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 lg:mt-16 lg:gap-12">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div
                        key={i}
                        className="rounded-12 border border-neutral-600 bg-neutral-800 p-10"
                    >
                        <div className="text-6 text-neutral-200">
                            Feels Like
                        </div>
                        <div className="text-3 mt-12 font-light text-white">
                            –
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
