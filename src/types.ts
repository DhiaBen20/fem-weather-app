export type Location = {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    country: string;
};

type CurrentWeather = {
    time: string;
    temperature_2m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    precipitation: number;
    weather_code: number;
    wind_speed_10m: number;
};

type HourlyWeather = {
    time: string[];
    temperature_2m: number[];
    weather_code: number[];
};

type DailyWeather = {
    time: string[];
    weather_code: number[];
    temperature_2m_min: number[];
    temperature_2m_max: number[];
};

export type WeatherResponse = {
    current: CurrentWeather;
    hourly: HourlyWeather;
    daily: DailyWeather;
};
