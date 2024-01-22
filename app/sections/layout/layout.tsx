import { ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import { useLocation } from "@remix-run/react";




export default function Layout ({children}: {children: ReactNode}) {

    const location = useLocation()
    const [showNav, setShowNav] = useState(false)
    useEffect(() => {
        if (['/login', '/signup', '/reset/password'].includes(location.pathname)) {
            setShowNav(false)
        }
        else setShowNav(true)
    }, [location.pathname])

    return (
        <div className="flex flex-col w-full min-h-screen">
            {showNav && 
            <header className="w-full flex  items-center justify-center">
                <Header />
            </header>}

            <main>
                {children}
            </main>

            {showNav && 
            <footer>
                footer
            </footer>}
        </div>
    )
}