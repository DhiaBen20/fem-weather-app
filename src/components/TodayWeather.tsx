import sunSrc from "../assets/images/icon-sunny.webp";
import { formatToUnitNumber, getWeatherIcon } from "../helpers";
import type { WeatherResponse } from "../types";
import WeatherInfoCard from "./WeatherInfoCard";

export default function TodayWeather({
    currentWeather,
}: {
    currentWeather: WeatherResponse["current"];
}) {
    return (
        <section>
            <div className="rounded-20 flex h-143 flex-col items-center justify-center gap-8 bg-[url('./assets/images/bg-today-small.svg')] bg-cover md:flex-row md:justify-between md:bg-[url('./assets/images/bg-today-large.svg')] md:px-12">
                <div className="flex flex-col items-center gap-6 md:items-start">
                    <span className="text-4 font-bold text-white">city</span>
                    <span className="text-6 text-white/80">–, Sep –, 2025</span>
                </div>

                <div className="flex items-center gap-10">
                    <img
                        src={getWeatherIcon(currentWeather.weather_code)}
                        alt=""
                        className="size-60"
                    />
                    <span className="text-1 font-semibold text-white italic">
                        {formatToUnitNumber(
                            Math.round(currentWeather.temperature_2m),
                            "celsius",
                        )}
                    </span>
                </div>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 lg:mt-16 lg:gap-12">
                {[
                    {
                        title: "Feels Like",
                        value: formatToUnitNumber(
                            Math.round(currentWeather.apparent_temperature),
                            "celsius",
                        ),
                    },
                    {
                        title: "Humidity",
                        value: formatToUnitNumber(
                            currentWeather.relative_humidity_2m,
                            "percent",
                        ),
                    },
                    {
                        title: "Wind",
                        value: formatToUnitNumber(
                            currentWeather.wind_speed_10m,
                            "kilometer-per-hour",
                        ),
                    },
                    {
                        title: "Precipitation",
                        value: formatToUnitNumber(
                            currentWeather.precipitation,
                            "millimeter",
                        ),
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
