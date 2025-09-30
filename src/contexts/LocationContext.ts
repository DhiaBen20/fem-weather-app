import { createContext, type Dispatch, type SetStateAction } from "react";
import type { Location } from "../types";

export type Coords = {
    latitude: number;
    longitude: number;
};

type LocationContext = {
    searchedLocation: null | Location;
    setSearchedLocation: Dispatch<SetStateAction<null | Location>>;
    reverseGeocodedLocation: null | {
        address: { country: string; city: string };
    };
    initialPosition: null | GeolocationPosition;
};

export const LocationContext = createContext<null | LocationContext>(null);
