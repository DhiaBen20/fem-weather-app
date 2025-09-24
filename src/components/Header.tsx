import logoSrc from "../assets/images/logo.svg";
import UnitsMenu from "./UnitsMenu";

export default function Header() {
    return (
        <header className="flex items-center justify-between px-8 pt-8 md:px-12 md:pt-12 lg:mx-56 lg:pt-24">
            <a href="#">
                <img src={logoSrc} alt="" className="h-[28px] md:h-[40px]" />
            </a>

            <UnitsMenu />
        </header>
    );
}
