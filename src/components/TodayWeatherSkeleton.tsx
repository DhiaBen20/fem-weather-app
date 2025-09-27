import WeatherInfoCard from "./WeatherInfoCard";

export default function TodayWeatherSkeleton() {
    return (
        <section>
            <div className="rounded-20 flex h-143 flex-col items-center justify-center gap-8 bg-neutral-800 md:px-12">
                <div className="flex gap-5">
                    <span className="animate-elevate size-6 rounded-full bg-white/80"></span>
                    <span className="animate-elevate size-6 rounded-full bg-white/80 [animation-delay:700ms]"></span>
                    <span className="animate-elevate size-6 rounded-full bg-white/80 [animation-delay:1400ms]"></span>
                </div>
                <div className="text-6 text-neutral-200">Loading...</div>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 lg:mt-16 lg:gap-12">
                {[
                    {
                        title: "Feels Like",
                        value: "–",
                    },
                    {
                        title: "Humidity",
                        value: "–",
                    },
                    {
                        title: "Wind",
                        value: "–",
                    },
                    {
                        title: "Precipitation",
                        value: "–",
                    },
                ].map((data, i) => (
                    <WeatherInfoCard
                        key={i}
                        title={data.title}
                        value={data.value}
                    />
                ))}
            </div>
        </section>
    );
}
