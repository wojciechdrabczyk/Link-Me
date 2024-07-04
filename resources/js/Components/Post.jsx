import React from "react";
import 'react-tooltip/dist/react-tooltip.css'
import Date from "@/Components/Date.jsx";

export default function Post({post}) {
    return (
        <div key={post.id} className={"p-4 border-b-2 text-xl flex flex-row items-center gap-2"}>
            <img src={`https://picsum.photos/id/${post.id}/200/300`} className={"w-[90px] h-[70px] object-cover"} alt="Placeholder image"/>
            <div>
                <p>
                    {post.body}
                </p>
                <Date post={post}/>
            </div>
        </div>
    )
}
