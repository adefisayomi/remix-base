import Logo from "~/components/Logo";
import { Icon } from '@iconify/react';
import { Link } from "@remix-run/react";


export default function Footer () {

    return (
    <div className="bg-background w-full">
        <div className="mx-auto w-full max-w-6xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
                <Logo className="text-primary" />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium text-sm font-mono">
                        <li className="mb-4">
                            <a href="https://ui.shadcn.com/" className="hover:underline">Shadcn</a>
                        </li>
                        <li>
                            <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium text-sm font-mono">
                        <li className="mb-4">
                            <a href="https://github.com/adefisayomi" className="hover:underline ">Github</a>
                        </li>
                        <li>
                            <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium text-sm font-mono">
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <hr className="my-6 w-full bg-muted" />

        <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 font-mono sm:text-center dark:text-gray-400">© 2024 <a href="https://remix-base.com/" className="hover:underline">Remix-Base™</a>. All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0 gap-2">
                <Link to="#" className="flex items-center justify-start gap-1">
                    <Icon icon="logos:twitter" className=""/>
                </Link>
                <Link to="#" className="flex items-center justify-start gap-1">
                    <Icon icon="ri:facebook-fill" className="text-cyan-600 w-6 h-6"/>
                </Link>
                <Link to="#" className="flex items-center justify-start gap-1">
                    <Icon icon="mingcute:github-fill" className=" w-6 h-6"/>
                </Link>
                <Link to="#" className="flex items-center justify-start gap-1">
                    <Icon icon="ri:linkedin-fill" className="text-cyan-400 w-6 h-6"/>
                </Link>

                
            </div>
        </div>
        </div>
    </div>

    )
}