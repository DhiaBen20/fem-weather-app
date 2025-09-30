import {
    Combobox,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
} from "@headlessui/react";
import { useState, type Dispatch, type SetStateAction } from "react";
import useSWR from "swr";
import loaderSrc from "../assets/images/icon-loading.svg";
import searchSrc from "../assets/images/icon-search.svg";
import type { Location } from "../types";

export default function PlacesCombobox({
    value,
    setValue,
}: {
    value: Location | null;
    setValue: Dispatch<SetStateAction<Location | null>>;
}) {
    const [query, setQuery] = useState("");

    return (
        <Combobox
            value={value}
            onChange={(value) => {
                setValue(value);
                setQuery(value?.name ?? "");
            }}
        >
            <div className="relative">
                <img
                    src={searchSrc}
                    alt=""
                    className="pointer-events-none absolute top-1/2 left-12 -translate-y-1/2"
                />
                <ComboboxInput
                    displayValue={(v: Location) => v?.name}
                    onChange={(e) => {
                        setQuery(e.target.value);
                    }}
                    className="rounded-12 w-full bg-neutral-800 py-8 pr-12 pl-[calc(var(--spacing)*30)] font-medium text-neutral-200 ring-neutral-200 ring-offset-[3px] ring-offset-neutral-900 placeholder:text-neutral-200 hover:bg-neutral-700 focus:ring-2 focus:outline-none"
                    placeholder="Search for a place"
                    autoComplete="off"
                />
            </div>

            <ComboboxOptions
                anchor={{
                    to: "bottom",
                    gap: "10px",
                }}
                className="rounded-12 w-(--input-width) space-y-2 border border-neutral-700 bg-neutral-800 p-4"
            >
                <AsyncOptions query={query} />
            </ComboboxOptions>
        </Combobox>
    );
}

function AsyncOptions({ query }: { query: null | string }) {
    const { isLoading, data } = useSWR<{ results?: Location[] }>(
        query ? `places.${query}` : null,
        () =>
            fetch(
                `https://geocoding-api.open-meteo.com/v1/search?name=${query}`,
            ).then((res) => res.json()),
    );

    if (isLoading)
        return (
            <div className="rounded-8 text-7 flex items-center gap-5 border border-transparent px-4 py-5 text-white">
                <img src={loaderSrc} alt="" className="animate-spin" />
                Search in progress
            </div>
        );

    if (data && data.results)
        return data.results.map((location) => (
            <ComboboxOption
                value={location}
                className="rounded-8 text-7 border border-transparent px-4 py-5 text-white data-focus:border-neutral-600 data-focus:bg-neutral-700"
                key={location.id}
            >
                {location.country} - {location.name}
            </ComboboxOption>
        ));

    return (
        <div className="rounded-8 text-7 flex items-center gap-5 border border-transparent px-4 py-5 text-white">
            No search result found!
        </div>
    );
}
