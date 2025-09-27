import { useContext } from "react";
import { UnitsContext } from "../contexts/UnitsContext";

export default function useUnitsContext() {
    const value = useContext(UnitsContext);

    if (!value)
        throw new Error(
            "Custom hook useUnitsContext must be used only inside <UnitsProvider />",
        );

    return value;
}
