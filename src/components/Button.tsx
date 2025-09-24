import type { ComponentProps } from "react";

export default function Button(props: ComponentProps<"button">) {
	return (
		<button
			{...props}
			className="text-5 font-medium rounded-12 bg-blue-500 hover:bg-blue-700 px-12 py-8 text-white focus:outline-none focus:ring-2 ring-blue-500 ring-offset-[3px] ring-offset-neutral-900"
		/>
	);
}
