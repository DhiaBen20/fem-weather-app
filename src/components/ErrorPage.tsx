import { useErrorBoundary } from "react-error-boundary";
import errorSrc from "../assets/images/icon-error.svg";
import retrySrc from "../assets/images/icon-retry.svg";

export default function ErrorPage() {
    const { resetBoundary } = useErrorBoundary();

    return (
        <main className="mt-32 flex flex-col items-center gap-12 px-8 pt-20 pb-12 md:px-12 lg:mx-56">
            <img src={errorSrc} alt="" className="h-25 w-21" />
            <h1 className="text-2 text-center font-bold text-white">
                Something went wrong
            </h1>
            <p className="text-5 max-w-277 text-center text-neutral-200">
                We couldn’t connect to the server (API error). Please try again
                in a few moments.
            </p>

            <button
                className="rounded-8 text-7 inline-flex items-center gap-5 bg-neutral-800 px-8 py-6 text-white"
                onClick={() => resetBoundary()}
            >
                <img src={retrySrc} alt="" className="size-8" />
                Retry
            </button>
        </main>
    );
}
