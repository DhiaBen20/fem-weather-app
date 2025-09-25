import Header from "./components/Header";
import PlaceSearch from "./components/PlaceSearch";
import { LocationProvider } from "./LocationContext";
import WeatherView from "./WeatherView";

export default function App() {
    return (
        <LocationProvider>
            <div className="min-h-screen bg-neutral-900">
                <Header />

                <main className="mt-24 px-8 pb-12 md:px-12 lg:mx-56">
                    <h1 className="font-title text-2 text-center font-bold tracking-[1px] text-white max-lg:max-w-241 md:mx-auto">
                        How’s the sky looking today?
                    </h1>

                    <PlaceSearch />

                    <WeatherView />
                </main>
            </div>
        </LocationProvider>
    );
}
