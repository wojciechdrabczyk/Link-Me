import ApplicationLogo from '@/Components/ApplicationLogo';
import {Link} from '@inertiajs/react';

export default function Guest({children}) {
    return (
        <div className="bg-gray-100">
            <nav className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo
                                        className={"border-slate-300 border-b-2 sm:-my-px hover:bg-orange-50 hover:border-orange-400 transition-all h-full " + route().current('index') ? "border-orange-400" : ""}/>
                                </Link>
                            </div>
                        </div>
                        <div className="hidden sm:flex sm:items-center sm:ms-6">
                            <div className="ms-3 relative">
                                        <span className="inline-flex rounded-md">
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                <Link href={route('login')}>Login</Link>
                                            </button>
                                        </span>
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                <Link href={route('register')}>Register</Link>
                                            </button>
                                        </span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>


            <main>{children}</main>
        </div>
    );
}
