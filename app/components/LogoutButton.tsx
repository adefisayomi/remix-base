import { Link } from "@remix-run/react";
import { Button } from "./ui/button";
import Routes from "~/Routes";



export default function LogoutButton () {

    return (
        <Link to={ Routes.logout }>
            <Button variant='outline' size='sm'>Logout</Button>
        </Link>
    )
}