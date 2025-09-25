import {
    createContext,
    useContext,
    useEffect,
    useState,
    type Dispatch,
    type SetStateAction,
} from "react";

type Coords = {
    latitude: number;
    longitude: number;
};

const LocationContext = createContext<null | {
    coords: Coords | null;
    setCoords: Dispatch<SetStateAction<Coords | null>>;
}>(null);

export function useLocationContext() {
    const value = useContext(LocationContext);

    if (!value)
        throw new Error(
            "Custom hook useLocationContext must be used only inside <LocationProvider />",
        );

    return value;
}

export function LocationProvider({ children }: { children: React.ReactNode }) {
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
