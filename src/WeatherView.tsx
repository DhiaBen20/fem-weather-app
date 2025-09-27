import useSWR from "swr";
import DailyForecast from "./components/DailyForecast";
import HourlyForecast from "./components/HourlyForecast";
import TodayWeather from "./components/TodayWeather";
import useLocationContext from "./hooks/useLocationContext";
import type { WeatherResponse } from "./types";
import TodayWeatherSkeleton from "./components/TodayWeatherSkeleton";
import DailyForecastSkeleton from "./components/DailyForecastSkeleton";
import HourlyForecastSkeleton from "./components/HourlyForecastSkeleton";

async function fetcher({
    latitude,
    longitude,
}: {
    longitude: number;
    latitude: number;
}) {
    const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_min,temperature_2m_max&hourly=temperature_2m,weather_code&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m`,
    );

    const error = new Error("");

    if (!res.ok) {
        throw error;
    }

    const body = await res.json();

    if (body.error) {
        throw error;
    }

    return body as WeatherResponse;
}

export default function WeatherView() {
    const { coords } = useLocationContext();

    const key = coords
        ? `weather.${coords.longitude}.${coords.latitude}`
        : null;

    const { isLoading, data } = useSWR(key, () => fetcher(coords!));

    if (isLoading)
        return (
            <div className="mt-16 lg:mt-24 lg:grid lg:grid-cols-3 lg:gap-16">
                <div className="space-y-16 max-lg:mb-16 lg:col-span-2 lg:space-y-27">
                    <TodayWeatherSkeleton />
                    <DailyForecastSkeleton />
                </div>
                <HourlyForecastSkeleton />
            </div>
        );

    if (data)
        return (
            <div className="mt-16 lg:mt-24 lg:grid lg:grid-cols-3 lg:gap-16">
                <div className="space-y-16 max-lg:mb-16 lg:col-span-2 lg:space-y-27">
                    <TodayWeather currentWeather={data.current} />
                    <DailyForecast dailyTemperature={data.daily} />
                </div>
                <HourlyForecast hourlyTemperature={data.hourly} />
            </div>
        );
}
