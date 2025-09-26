export default function WeatherInfoCard({
    title,
    value,
}: {
    title: string;
    value: string;
}) {
    return (
        <div className="rounded-12 border border-neutral-600 bg-neutral-800 p-10">
            <div className="text-6 text-neutral-200">{title}</div>
            <div className="text-3 mt-12 font-light text-white">{value}</div>
        </div>
    );
}
