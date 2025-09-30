import { useEffect, useState } from "react";
import useSWR from "swr";
import { LocationContext } from "../contexts/LocationContext";
import type { Location } from "../types";

async function fetcher(position: GeolocationPosition) {
    const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`,
    );

    if (res.ok) {
        const data = await res.json();

        if (!data.error) {
            return data as { address: { country: string; city: string } };
        }
    }

    throw new Error("");
}

export default function LocationProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [position, setPosition] = useState<GeolocationPosition | null>(null);

    const { data } = useSWR(position, fetcher);

    const [searchedLocation, setSearchedLocation] = useState<Location | null>(
        null,
    );

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position: GeolocationPosition) => {
                setPosition(position);
            },
        );
    }, []);

    return (
        <LocationContext.Provider
            value={{
                setSearchedLocation,
                searchedLocation,
                reverseGeocodedLocation: data ?? null,
                initialPosition: position,
            }}
        >
            {children}
        </LocationContext.Provider>
    );
}
