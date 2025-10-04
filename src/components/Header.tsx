import logoSrc from "../assets/images/logo.svg";
import UnitsMenu from "./UnitsMenu";

export default function Header() {
    return (
        <header className="app-container flex items-center justify-between pt-8 md:pt-12 lg:pt-24">
            <a href="#" aria-label="Weather Now">
                <img src={logoSrc} alt="" className="h-[28px] md:h-[40px]" />
            </a>

            <UnitsMenu />
        </header>
    );
}
