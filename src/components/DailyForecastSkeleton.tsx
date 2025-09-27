export default function DailyForecastSkeleton() {
    return (
        <section>
            <h2 className="text-5 font-semibold text-white">Daily forecast</h2>

            <div className="mt-10 grid grid-cols-3 gap-8 md:grid-cols-7">
                {Array.from({ length: 7 }).map((_, i) => (
                    <div
                        key={i}
                        className="rounded-12 flex h-[165px] flex-col items-center gap-8 border border-neutral-600 bg-neutral-800 px-5 py-8"
                    />
                ))}
            </div>
        </section>
    );
}
