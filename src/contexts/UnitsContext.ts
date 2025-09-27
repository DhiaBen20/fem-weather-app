import { createContext, type ActionDispatch } from "react";

export type State = {
    system: "metric" | "imperial";
    temperature: "celsius" | "fahrenheit";
    windSpeed: "kmh" | "mph";
    precipitation: "mm" | "in";
};

export type Action =
    | { type: "switch_to_imperial"; payload?: null }
    | { type: "switch_to_metric"; payload?: null }
    | { type: "check_one_type"; payload: Partial<Omit<State, "system">> };

export const UnitsContext = createContext<null | {
    units: State;
    dispatch: ActionDispatch<[action: Action]>;
}>(null);
