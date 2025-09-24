import {
    Combobox,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
} from "@headlessui/react";
import IconSrc from "../assets/images/icon-search.svg";

export default function PlacesCombobox() {
    return (
        <Combobox>
            <div className="relative">
                <img
                    src={IconSrc}
                    alt=""
                    className="pointer-events-none absolute top-1/2 left-12 -translate-y-1/2"
                />
                <ComboboxInput
                    className="rounded-12 w-full bg-neutral-800 py-8 pr-12 pl-[calc(var(--spacing)*30)] font-medium text-neutral-200 ring-neutral-200 ring-offset-[3px] ring-offset-neutral-900 placeholder:text-neutral-200 hover:bg-neutral-700 focus:ring-2 focus:outline-none"
                    placeholder="Search for a place"
                />
            </div>
            <ComboboxOptions
                anchor={{
                    to: "bottom",
                    gap: "10px",
                }}
                className="rounded-12 w-(--input-width) space-y-2 border border-neutral-700 bg-neutral-800 p-4"
            >
                <ComboboxOption
                    value={"option 1"}
                    className="rounded-8 text-7 border border-transparent px-4 py-5 text-white data-focus:border-neutral-600 data-focus:bg-neutral-700"
                >
                    Option 1
                </ComboboxOption>
                <ComboboxOption
                    value={"option 2"}
                    className="rounded-8 text-7 border border-transparent px-4 py-5 text-white data-focus:border-neutral-600 data-focus:bg-neutral-700"
                >
                    Option 2
                </ComboboxOption>
            </ComboboxOptions>
        </Combobox>
    );
}
