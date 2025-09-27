import { useContext } from "react";
import { LocationContext } from "../contexts/LocationContext";

export default function useLocationContext() {
    const value = useContext(LocationContext);

    if (!value)
        throw new Error(
            "Custom hook useLocationContext must be used only inside <LocationProvider />",
        );

    return value;
}
