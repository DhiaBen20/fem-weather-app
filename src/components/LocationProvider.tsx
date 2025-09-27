import { useEffect, useState } from "react";
import { LocationContext, type Coords } from "../contexts/LocationContext";

export default function LocationProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [coords, setCoords] = useState<null | Coords>(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position: GeolocationPosition) => {
                setCoords({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            },
        );
    }, []);

    return (
        <LocationContext.Provider value={{ coords, setCoords }}>
            {children}
        </LocationContext.Provider>
    );
}
