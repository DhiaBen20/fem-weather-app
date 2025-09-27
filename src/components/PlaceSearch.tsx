import { useState } from "react";
import useLocationContext from "../hooks/useLocationContext";
import type { Location } from "../types";
import Button from "./Button";
import PlacesCombobox from "./PlacesCombobox";

export default function PlaceSearch() {
    const [location, setLocation] = useState<Location | null>(null);

    const { setCoords } = useLocationContext();

    return (
        <div className="mt-24 grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:gap-8 lg:mx-auto lg:max-w-328">
            <PlacesCombobox value={location} setValue={setLocation} />

            <Button
                onClick={() => {
                    if (!location) return;

                    setCoords({
                        latitude: location.latitude,
                        longitude: location.longitude,
                    });
                }}
            >
                Search
            </Button>
        </div>
    );
}
