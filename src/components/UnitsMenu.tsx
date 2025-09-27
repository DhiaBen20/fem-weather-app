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
import type { State } from "../contexts/UnitsContext";
import useUnitsContext from "../hooks/useUnitsContext";

const temperature: { label: string; value: State["temperature"] }[] = [
    {
        label: "Celsius (°C)",
        value: "celsius",
    },
    {
        label: "Fahrenheit (°F)",
        value: "fahrenheit",
    },
] as const;

const windSpeed: { label: string; value: State["windSpeed"] }[] = [
    {
        label: "km/h",
        value: "kmh",
    },
    {
        label: "mph",
        value: "mph",
    },
] as const;

const precipitation: { label: string; value: State["precipitation"] }[] = [
    {
        label: "Millimeters (mm)",
        value: "mm",
    },
    {
        label: "Inches (in)",
        value: "in",
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

export default function UnitsMenu() {
    const { units, dispatch } = useUnitsContext();

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
                            units.system === "metric"
                                ? { type: "switch_to_imperial" }
                                : { type: "switch_to_metric" },
                        );
                    }}
                >
                    {units.system === "metric" && "Switch to Imperial"}
                    {units.system === "imperial" && "Switch to Metric"}
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
                            value={units[group.key]}
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
