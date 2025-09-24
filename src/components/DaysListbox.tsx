import {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
    ListboxSelectedOption,
} from "@headlessui/react";
import chevronDownSrc from "../assets/images/icon-dropdown.svg";

const weekDays = [
    { label: "Monday", value: "monday" },
    { label: "Tuesday", value: "tuesday" },
    { label: "Wednesday", value: "wednesday" },
    { label: "Thursday", value: "thursday" },
    { label: "Friday", value: "friday" },
    { label: "Saturday", value: "saturday" },
    { label: "Sunday", value: "sunday" },
];

export default function DaysListbox() {
    return (
        <Listbox defaultValue="tuesday">
            <ListboxButton className="text-8 rounded-6 md:text-7 inline-flex items-center gap-6 bg-neutral-600 px-8 py-4 text-white">
                {({ value }) => {
                    return (
                        <>
                            {weekDays.find((d) => d.value === value)?.label ??
                                "select a day"}
                            <img
                                src={chevronDownSrc}
                                alt=""
                                className="w-6 h-9 shrink-0"
                            />
                        </>
                    );
                }}
            </ListboxButton>
            <ListboxOptions
                anchor={{ to: "bottom end", gap: "10px" }}
                className="rounded-12 w-107 space-y-2 border border-neutral-600 bg-neutral-800 px-4 py-3 outline-none"
            >
                {weekDays.map((d) => (
                    <ListboxOption
                        value={d.value}
                        className="rounded-8 text-7 flex w-full items-center justify-between px-4 py-5 text-white outline-none data-focus:bg-neutral-700 data-selected:bg-neutral-700"
                    >
                        {d.label}
                    </ListboxOption>
                ))}
            </ListboxOptions>
        </Listbox>
    );
}
