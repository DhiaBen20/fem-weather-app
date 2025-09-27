import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header";
import LocationProvider from "./components/LocationProvider";
import PlaceSearch from "./components/PlaceSearch";
import UnitsProvider from "./components/UnitsProvider";
import WeatherView from "./WeatherView";

export default function App() {
    return (
        <LocationProvider>
            <UnitsProvider>
                <div className="min-h-screen bg-neutral-900">
                    <Header />

                    <ErrorBoundary fallback={<ErrorPage />}>
                        <main className="app-container mt-24 pb-12">
                            <h1 className="font-title text-2 text-center font-bold tracking-[1px] text-white max-lg:max-w-241 md:mx-auto">
                                How’s the sky looking today?
                            </h1>

                            <PlaceSearch />

                            <WeatherView />
                        </main>
                    </ErrorBoundary>
                </div>
            </UnitsProvider>
        </LocationProvider>
    );
}
