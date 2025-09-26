import {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from "@headlessui/react";
import chevronDownSrc from "../assets/images/icon-dropdown.svg";
import type { Dispatch, SetStateAction } from "react";

export default function DaysListbox({
    days,
    selectedDay,
    setSelectedDay,
}: {
    days: { index: number; day: string }[];
    setSelectedDay: Dispatch<SetStateAction<number>>;
    selectedDay: number;
}) {
    return (
        <Listbox
            value={days[selectedDay]}
            onChange={(value: { index: number; day: string }) =>
                setSelectedDay(value.index)
            }
        >
            <ListboxButton className="text-8 rounded-6 md:text-7 inline-flex items-center gap-6 bg-neutral-600 px-8 py-4 text-white">
                {({ value }) => {
                    return (
                        <>
                            {days.find((d) => d.index === value.index)?.day ??
                                "select a day"}
                            <img
                                src={chevronDownSrc}
                                alt=""
                                className="h-9 w-6 shrink-0"
                            />
                        </>
                    );
                }}
            </ListboxButton>
            <ListboxOptions
                anchor={{ to: "bottom end", gap: "10px" }}
                className="rounded-12 w-107 space-y-2 border border-neutral-600 bg-neutral-800 px-4 py-3 outline-none"
            >
                {days.map((d) => (
                    <ListboxOption
                        key={d.index}
                        value={d}
                        className="rounded-8 text-7 flex w-full items-center justify-between px-4 py-5 text-white outline-none data-focus:bg-neutral-700 data-selected:bg-neutral-700"
                    >
                        {d.day}
                    </ListboxOption>
                ))}
            </ListboxOptions>
        </Listbox>
    );
}
