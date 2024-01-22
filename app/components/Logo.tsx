import { Link } from "@remix-run/react";
import Routes from "~/Routes";




export default function Logo ({className}: {className?: string}) {

    return (
        <div className="w-fit">
            <Link to={Routes.home}>
            <h1 className={`${className} scroll-m-20 text-2xl font-extrabold tracking-tight text-center mb-3`}>
                R-B
            </h1>
            </Link>
        </div>
    )
}