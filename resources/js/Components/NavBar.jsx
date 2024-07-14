import ApplicationLogo from "@/Components/ApplicationLogo";
import {Link} from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown";
import React from 'react'

export default function NavBar({auth}) {
    return (
        <>
            <nav className={""}>
                <div className={"bg-white border-b border-gray-100"}>
                    <div className={"max-w-12xl mx-auto px-4 sm:px-6 lg:px-8"}>
                        <div className={"flex justify-between"}>
                            <div className={"flex"}>
                                <div className={"shrink-0 flex items-center"}>
                                    <Link href="/">
                                        <ApplicationLogo className="border-slate-300 border-b-2 hover:bg-orange-50 hover:border-orange-400 transition-all h-full"/>
                                    </Link>
                                </div>
                            </div>
                            <div className={"hidden sm:flex sm:items-center sm:ms-6"}>
                                <div className={"hidden sm:flex sm:items-center sm:ms-6"}>
                                    <div className={"ms-3 relative"}>
                                        {auth.user ? (
                                            <div className="hidden sm:flex sm:items-center sm:ms-6">
                                                <div className="ms-3 relative">
                                                    <Dropdown>
                                                        <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {auth.user.name}
                                                <svg
                                                    className="ms-2 -me-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                                        </Dropdown.Trigger>
                                                        <Dropdown.Content>
                                                            <Dropdown.Link href={route('logout')} method="post"
                                                                           as="button">
                                                                Log Out
                                                            </Dropdown.Link>
                                                        </Dropdown.Content>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className={"space-x-3"}>
                                                <Link href={"/login"}
                                                >
                                                    Login
                                                </Link>
                                                <Link href={"/register"}>Register</Link>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}


