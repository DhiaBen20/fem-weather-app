import {
    Combobox,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
} from "@headlessui/react";
import IconSrc from "../assets/images/icon-search.svg";
import Button from "./Button";
import PlacesCombobox from "./PlacesCombobox";

export default function PlaceSearch() {
    return (
        <div className="mt-24 grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:gap-8 lg:mx-auto lg:max-w-328">
            <PlacesCombobox />

            <Button>Search</Button>
        </div>
    );
}
