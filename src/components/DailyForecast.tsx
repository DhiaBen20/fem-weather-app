import sunSrc from "../assets/images/icon-sunny.webp";

export default function DailyForecast() {
    return (
        <section>
            <h2 className="text-5 font-semibold text-white">Daily forecast</h2>

            <div className="mt-10 grid grid-cols-3 gap-8 md:grid-cols-7">
                {Array.from({ length: 7 }).map((_, i) => (
                    <div
                        key={i}
                        className="rounded-12 flex flex-col items-center gap-8 border border-neutral-600 bg-neutral-800 px-5 py-8"
                    >
                        <div className="text-6 text-white">Tue</div>
                        <img src={sunSrc} alt="" className="size-30" />
                        <div className="text-7 flex w-full items-center justify-between text-white">
                            <span>20°</span>
                            <span>20°</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

