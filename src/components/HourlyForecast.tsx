import { useState } from "react";
import { displayTemperature, transformHourlyTemperatures } from "../helpers";
import useUnitsContext from "../hooks/useUnitsContext";
import type { WeatherResponse } from "../types";
import DaysListbox from "./DaysListbox";

export default function HourlyForecast({
    hourlyTemperature,
}: {
    hourlyTemperature: WeatherResponse["hourly"];
}) {
    const { units } = useUnitsContext();

    const [selectedDay, setSelectedDay] = useState(0);

    return (
        <section className="rounded-20 flex h-[696px] flex-col gap-8 bg-neutral-800 py-10 md:h-[702px]">
            <div className="flex items-center justify-between px-8 md:px-10">
                <h2 className="text-5 font-semibold text-white">
                    Hourly forecast
                </h2>

                <DaysListbox
                    days={transformHourlyTemperatures(hourlyTemperature).map(
                        (d, i) => ({ index: i, day: d.day }),
                    )}
                    setSelectedDay={setSelectedDay}
                    selectedDay={selectedDay}
                />
            </div>

            <div className="space-y-8 overflow-y-auto px-8 [scrollbar-color:_#302F4A_transparent] [scrollbar-width:thin] focus:outline-none md:px-10">
                {transformHourlyTemperatures(hourlyTemperature)[
                    selectedDay
                ].hourly.map((hour, i) => (
                    <div
                        key={i}
                        className="rounded-8 flex items-center gap-4 border border-neutral-600 bg-neutral-700 py-5 pr-8 pl-6"
                        ref={(elem) => {
                            if (!elem || !elem.parentElement) return;

                            const scrollbarWidth =
                                elem.parentElement.offsetWidth -
                                elem.parentElement.scrollWidth;

                            elem.style.marginRight = `-${scrollbarWidth}px`;
                        }}
                    >
                        <img
                            src={hour.weatherIcon}
                            alt=""
                            className="size-20"
                        />
                        <div className="text-5 flex-1 text-white">
                            {hour.hour}
                        </div>

                        <div className="text-7 text-white">
                            {displayTemperature(
                                hour.temperature,
                                units.temperature,
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
