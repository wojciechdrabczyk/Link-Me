import NavBar from "@/Components/NavBar";
import {Head} from "@inertiajs/react";
import React from "react";

export default function Welcome({auth, posts}) {
    console.log(posts);
    return (
        <>
            <div className={"bg-gray-100 min-h-screen"}>
                <Head title="Link It"/>
                <NavBar auth={auth}/>
            </div>
        </>
    )
}
