import React from "react";
import 'react-tooltip/dist/react-tooltip.css'
import Date from "@/Components/Date.jsx";
import {Link} from "@inertiajs/react";
import {FaRegComments} from "react-icons/fa6";

export default function Post({post}) {
    const imageSrc = post.thumbnail ? <img src={post.thumbnail} className={"w-[90px] h-[70px] object-cover"}
                                           alt="Placeholder image"/> :
        <div className={"w-[90px] h-[70px] flex items-center justify-center"}><FaRegComments
            className={"w-[50px] h-[30px] object-cover"}/></div>
    return (
        <div key={post.id}
             className={"w-full p-4 border-b-2 text-xl flex flex-row items-center gap-2 px-4 sm:px-6 lg:px-8"}>
            {imageSrc}
            <div>
                <p>
                    <Link href={route('post.show', post.id)}>{post.title}</Link>
                </p>
                <Date post={post}/>
            </div>
        </div>
    )
}
