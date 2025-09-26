import sunSrc from "../assets/images/icon-sunny.webp";
import { formatToUnitNumber, transformDailyTemperatures } from "../helpers";
import type { WeatherResponse } from "../types";

export default function DailyForecast({
    dailyTemperature,
}: {
    dailyTemperature: WeatherResponse["daily"];
}) {
    return (
        <section>
            <h2 className="text-5 font-semibold text-white">Daily forecast</h2>

            <div className="mt-10 grid grid-cols-3 gap-8 md:grid-cols-7">
                {transformDailyTemperatures(dailyTemperature).map((day) => (
                    <div
                        key={day.day}
                        className="rounded-12 flex flex-col items-center gap-8 border border-neutral-600 bg-neutral-800 px-5 py-8"
                    >
                        <div className="text-6 text-white">{day.day}</div>
                        <img src={day.weatherIcon} alt="" className="size-30" />
                        <div className="text-7 flex w-full items-center justify-between text-white">
                            <span>
                                {formatToUnitNumber(
                                    day.minTemperature,
                                    "celsius",
                                )}
                            </span>
                            <span>
                                {formatToUnitNumber(
                                    day.maxTemperature,
                                    "celsius",
                                )}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
