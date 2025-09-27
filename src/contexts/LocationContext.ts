import { createContext, type Dispatch, type SetStateAction } from "react";

export type Coords = {
    latitude: number;
    longitude: number;
};

export const LocationContext = createContext<null | {
    coords: Coords | null;
    setCoords: Dispatch<SetStateAction<Coords | null>>;
}>(null);
