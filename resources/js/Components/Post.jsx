import React from "react";
import 'react-tooltip/dist/react-tooltip.css'
import Date from "@/Components/Date.jsx";
import {Link, useForm} from "@inertiajs/react";
import {FaRegComments} from "react-icons/fa6";
import {PiHeartFill} from "react-icons/pi";

export default function Post({post}) {

    const {data, setData, get: sendFn, get, processing, errors, reset} = useForm({
        body: '',
    });

    function likeButton(e) {
        e.preventDefault();
        sendFn(route('post.like', post.id))
    }


    const imageSrc = post.thumbnail ? <img src={post.thumbnail} className={"w-[90px] h-[70px] object-cover"}
                                           alt="Placeholder image"/> :
        <div className={"w-[90px] h-[70px] flex items-center justify-center"}><FaRegComments
            className={"w-[50px] h-[30px] object-cover"}/></div>


    return (
        <div>
            <div key={post.id}
                 className={"w-full p-2 border-b-2 text-xl flex flex-row items-center px-4 sm:px-6 lg:px-8 gap-2"}>
                <button
                    className={"rounded-full justify-start items-center"}
                    onClick={(e) => likeButton(e)}>
                    <PiHeartFill></PiHeartFill>
                    {post.post_votes_count > 0 && post.post_votes_count}
                </button>
                <div className="">
                    {imageSrc}
                </div>
                <div>
                    <p>
                        <Link href={route('post.show', post.id)}>{post.title}</Link>
                    </p>
                    <div className={"text-xs text-gray-500"}>
                        <Date post={post}/>
                        {" by " + post.author.name}
                    </div>
                    <div>
                        <button className={"rounded-full px-2 my-1 py-1 bg-gray-200 text-sm"}>
                            <Link href={route('post.show', post.id)}>Comments</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
