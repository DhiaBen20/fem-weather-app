import drizzleSrc from "./assets/images/icon-drizzle.webp";
import fogSrc from "./assets/images/icon-fog.webp";
import overcastSrc from "./assets/images/icon-overcast.webp";
import partlySrc from "./assets/images/icon-partly-cloudy.webp";
import rainSrc from "./assets/images/icon-rain.webp";
import snowSrc from "./assets/images/icon-snow.webp";
import stormSrc from "./assets/images/icon-storm.webp";
import sunnySrc from "./assets/images/icon-sunny.webp";
import type { WeatherResponse } from "./types";

export function formatToUnitNumber(value: number, unit: string) {
    return value.toLocaleString("en-us", {
        style: "unit",
        unit: unit,
        unitDisplay: "short",
    });
}

export function getWeekDayFromTime(
    time: string,
    style: "short" | "long" | "narrow",
) {
    return new Date(time).toLocaleDateString("en-us", { weekday: style });
}

export function transformDailyTemperatures(
    dailyTemperature: WeatherResponse["daily"],
) {
    const newData = [];

    for (let i = 0; i < dailyTemperature.time.length; i++) {
        newData.push({
            day: getWeekDayFromTime(dailyTemperature.time[i], "short"),
            weather_code: dailyTemperature.weather_code[i],
            weatherIcon: getWeatherIcon(dailyTemperature.weather_code[i]),
            minTemperature: Math.floor(dailyTemperature.temperature_2m_min[i]),
            maxTemperature: Math.floor(dailyTemperature.temperature_2m_max[i]),
        });
    }

    return newData;
}

export function transformHourlyTemperatures(
    hourlyTemperature: WeatherResponse["hourly"],
) {
    const newData = [];

    for (let i = 0; i < hourlyTemperature.time.length; i += 24) {
        const day = {
            day: getWeekDayFromTime(hourlyTemperature.time[i], "long"),
            hourly: [] as {
                hour: string;
                temperature: number;
                weather_code: number;
                weatherIcon: string;
            }[],
        };

        for (let j = 0; j < 24; j++) {
            day.hourly.push({
                hour: new Date(
                    hourlyTemperature.time[i + j],
                ).toLocaleTimeString("en-us", {
                    hour: "2-digit",
                }),
                temperature: hourlyTemperature.temperature_2m[i + j],
                weather_code: hourlyTemperature.weather_code[i + j],
                weatherIcon: getWeatherIcon(
                    hourlyTemperature.weather_code[i + j],
                )!,
            });
        }

        newData.push(day);
    }

    return newData;
}

export function getWeatherIcon(code: number) {
    const map = {
        [drizzleSrc]: [51, 53, 55, 56, 57],
        [fogSrc]: [45, 48],
        [overcastSrc]: [3],
        [partlySrc]: [1, 2],
        [rainSrc]: [61, 63, 65, 66, 67, 80, 81, 82],
        [snowSrc]: [71, 73, 75, 77, 85],
        [stormSrc]: [86, 95, 96, 99],
        [sunnySrc]: [0],
    };

    for (const [src, codes] of Object.entries(map)) {
        if (codes.includes(code)) {
            return src;
        }
    }
}
