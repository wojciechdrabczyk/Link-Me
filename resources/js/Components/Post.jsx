import React from "react";
import 'react-tooltip/dist/react-tooltip.css'
import Date from "@/Components/Date.jsx";
import {Link} from "@inertiajs/react";

export default function Post({post}) {
    const imageSrc = post.thumbnail;
    return (
        <div key={post.id}
             className={"w-full p-4 border-b-2 text-xl flex flex-row items-center gap-2 px-4 sm:px-6 lg:px-8"}>
            {imageSrc &&
                <img src={imageSrc} className={"w-[90px] h-[70px] object-cover"}
                     alt="Placeholder image"/>
            }
            <div>
                <p>
                    <Link href={route('post.show', post.id)}>{post.title}</Link>
                </p>
                <Date post={post}/>
            </div>
        </div>
    )
}
