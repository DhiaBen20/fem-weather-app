import { useReducer, type ReactNode } from "react";

import {
    UnitsContext,
    type Action,
    type State,
} from "../contexts/UnitsContext";

function reducer(prevState: State, action: Action): State {
    const { type, payload } = action;

    switch (type) {
        case "switch_to_metric":
            return {
                system: "metric",
                temperature: "celsius",
                windSpeed: "kmh",
                precipitation: "mm",
            };
        case "switch_to_imperial":
            return {
                system: "imperial",
                temperature: "fahrenheit",
                windSpeed: "mph",
                precipitation: "in",
            };
        case "check_one_type":
            return { ...prevState, ...payload };
        default:
            break;
    }

    throw new Error(`Unknown type ${type}`);
}

export default function UnitsProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(reducer, {
        system: "metric",
        temperature: "celsius",
        windSpeed: "kmh",
        precipitation: "mm",
    });

    return (
        <UnitsContext.Provider value={{ units: state, dispatch }}>
            {children}
        </UnitsContext.Provider>
    );
}
