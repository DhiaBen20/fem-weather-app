import DailyForecast from "./components/DailyForecast";
import Header from "./components/Header";
import HourlyForecast from "./components/HourlyForecast";
import PlaceSearch from "./components/PlaceSearch";
import TodayWeather from "./components/TodayWeather";

export default function App() {
    return (
        <div className="min-h-screen bg-neutral-900">
            <Header />

            <main className="mt-24 px-8 md:px-12 lg:mx-56 pb-12">
                <h1 className="font-title text-2 text-center font-bold tracking-[1px] text-white max-lg:max-w-241 md:mx-auto">
                    How’s the sky looking today?
                </h1>

                <PlaceSearch />

                <div className="mt-16 lg:mt-24 lg:grid lg:grid-cols-3 lg:gap-16">
                    <div className="max-lg:mb-16 space-y-16 lg:col-span-2 lg:space-y-27">
                        <TodayWeather />
                        <DailyForecast />
                    </div>
                    <HourlyForecast />
                </div>
            </main>
        </div>
    );
}
