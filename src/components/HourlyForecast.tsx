import sunSrc from "../assets/images/icon-sunny.webp";
import DaysListbox from "./DaysListbox";

export default function HourlyForecast() {
    return (
        <section className="rounded-20 flex h-[696px] flex-col gap-8 bg-neutral-800 py-10 md:h-[702px]">
            <div className="flex items-center justify-between px-8 md:px-10">
                <h2 className="text-5 font-semibold text-white">
                    Hourly forecast
                </h2>

                <DaysListbox />
            </div>

            <div className="space-y-8 overflow-y-auto px-8 [scrollbar-color:_#302F4A_transparent] [scrollbar-width:thin] md:px-10 focus:outline-none">
                {Array.from({ length: 24 }).map((_, i) => (
                    <div
                        key={i}
                        className="rounded-8 flex items-center gap-4 border border-neutral-600 bg-neutral-700 py-5 pr-8 pl-6"
                        ref={(elem) => {
                            if (!elem || !elem.parentElement) return;

                            const scrollbarWidth =
                                elem.parentElement.offsetWidth -
                                elem.parentElement.scrollWidth;

                            elem.style.marginRight = `-${scrollbarWidth}px`;
                        }}
                    >
                        <img src={sunSrc} alt="" className="size-20" />
                        <div className="text-5 flex-1 text-white">3 PM</div>

                        <div className="text-7 text-white">20°</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
