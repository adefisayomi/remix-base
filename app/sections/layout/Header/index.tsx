import Logo from "~/components/Logo";
import HeaderMenu from "./HeaderMenu";
import HeaderScrollingText from "./HeaderScrollingText";
import UserMenu from "./UserMenu";



export default function Header () {

    return (
        <div className="flex flex-col w-full gap-4">
            <HeaderScrollingText />

            <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
                <Logo />
                <HeaderMenu />
                <UserMenu />
            </div>
        </div>
    )
}