import {
    Popover,
    PopoverButton,
    PopoverPanel,
    Radio,
    RadioGroup,
} from "@headlessui/react";
import checkSrc from "../assets/images/icon-checkmark.svg";
import chevronDownSrc from "../assets/images/icon-dropdown.svg";
import gearSrc from "../assets/images/icon-units.svg";
import { useReducer } from "react";

const TEMPERATURE_CELSIUS = "celsius";
const TEMPERATURE_FAHRENHEIT = "fahrenheit";

const temperature = [
    {
        label: "Celsius (°C)",
        value: TEMPERATURE_CELSIUS,
    },
    {
        label: "Fahrenheit (°F)",
        value: TEMPERATURE_FAHRENHEIT,
    },
] as const;

const SPEED_KILOMETERS = "kmh";
const SPEED_MILES = "mph";

const windSpeed = [
    {
        label: "km/h",
        value: SPEED_KILOMETERS,
    },
    {
        label: "mph",
        value: SPEED_MILES,
    },
] as const;

const PRECIPITATION_MILLIMETERS = "mm";
const PRECIPITATION_INCHES = "in";

const precipitation = [
    {
        label: "Millimeters (mm)",
        value: PRECIPITATION_MILLIMETERS,
    },
    {
        label: "Inches (in)",
        value: PRECIPITATION_INCHES,
    },
] as const;

const groups = [
    { key: "temperature" as const, label: "Temperature", options: temperature },
    { key: "windSpeed" as const, label: "Wind Speed", options: windSpeed },
    {
        key: "precipitation" as const,
        label: "Precipitation",
        options: precipitation,
    },
];

type State = {
    system: "metric" | "imperial";
    temperature: typeof TEMPERATURE_CELSIUS | typeof TEMPERATURE_FAHRENHEIT;
    windSpeed: typeof SPEED_KILOMETERS | typeof SPEED_MILES;
    precipitation:
        | typeof PRECIPITATION_MILLIMETERS
        | typeof PRECIPITATION_INCHES;
};

type Action =
    | { type: "switch_to_imperial"; payload?: null }
    | { type: "switch_to_metric"; payload?: null }
    | { type: "check_one_type"; payload: Partial<Omit<State, "system">> };

function reducer(prevState: State, action: Action): State {
    const { type, payload } = action;

    switch (type) {
        case "switch_to_metric":
            return {
                system: "metric",
                temperature: temperature[0].value,
                windSpeed: windSpeed[0].value,
                precipitation: precipitation[0].value,
            };
        case "switch_to_imperial":
            return {
                system: "imperial",
                temperature: temperature[1].value,
                windSpeed: windSpeed[1].value,
                precipitation: precipitation[1].value,
            };
        case "check_one_type":
            return { ...prevState, ...payload };
        default:
            break;
    }

    throw new Error(`Unknown type ${type}`);
}

export default function UnitsMenu() {
    const [state, dispatch] = useReducer(reducer, {
        system: "metric",
        temperature: temperature[0].value,
        windSpeed: windSpeed[0].value,
        precipitation: precipitation[0].value,
    });

    return (
        <Popover>
            <PopoverButton className="text-8 md:text-7 rounded-6 md:rounded-8 inline-flex items-center gap-3 bg-neutral-800 px-5 py-4 text-white hover:bg-neutral-700 md:gap-5 md:px-8 md:py-6">
                <img src={gearSrc} alt="" className="size-7 md:size-8" />
                Units
                <img
                    src={chevronDownSrc}
                    alt=""
                    className="h-7 w-4.5 md:h-9 md:w-6"
                />
            </PopoverButton>
            <PopoverPanel
                anchor={{ to: "bottom end", gap: "10px" }}
                className="rounded-12 w-107 space-y-2 border border-neutral-600 bg-neutral-800 px-4 py-3 outline-none"
            >
                <button
                    className="rounded-8 text-7 w-full px-4 py-5 text-left text-white outline-none hover:bg-neutral-700 focus:bg-neutral-700 data-selected:bg-neutral-700"
                    onClick={() => {
                        dispatch(
                            state.system === "metric"
                                ? { type: "switch_to_imperial" }
                                : { type: "switch_to_metric" },
                        );
                    }}
                >
                    {state.system === "metric" && "Switch to Imperial"}
                    {state.system === "imperial" && "Switch to Metric"}
                </button>

                {groups.map((group, i) => (
                    <div key={group.key} className="not-first:mt-2">
                        {i > 0 && (
                            <div className="border-b border-neutral-700" />
                        )}

                        <div
                            aria-hidden
                            className="text-8 mb-3 px-4 pt-3 pb-0 text-neutral-300"
                        >
                            {group.label}
                        </div>

                        <RadioGroup
                            aria-label={group.label}
                            value={state[group.key]}
                            onChange={(v) =>
                                dispatch({
                                    type: "check_one_type",
                                    payload: { [group.key]: v },
                                })
                            }
                        >
                            {group.options.map((option) => (
                                <Radio
                                    key={option.value}
                                    value={option.value}
                                    className="group rounded-8 text-7 flex w-full items-center justify-between px-4 py-5 text-white outline-none hover:bg-neutral-700 focus:bg-neutral-700 data-checked:bg-neutral-700"
                                >
                                    {option.label}
                                    <img
                                        src={checkSrc}
                                        alt=""
                                        className="invisible h-8.5 w-7 group-data-checked:visible"
                                    />
                                </Radio>
                            ))}
                        </RadioGroup>
                    </div>
                ))}
            </PopoverPanel>
        </Popover>
    );
}
