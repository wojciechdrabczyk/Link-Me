import {Link, useForm, usePage} from "@inertiajs/react";
import React from "react";
import Comment from "@/Pages/Post/Comment.jsx";
import {PiHeartFill} from "react-icons/pi";

export default function Show({post, auth, likes, dislike, comments}) {
    const {delete: destroy, get: sendFn} = useForm();
    const imageSrc = post.thumbnail;

    // console.log(useForm());

    function handleDelete(e) {
        e.preventDefault();
        destroy(post.id);
    }

    function likeButton(e) {
        e.preventDefault();
        sendFn(route('post.like', post.id))

    }

    function dislikeButton(e) {
        e.preventDefault();
        sendFn(route('post.dislike', post.id))

    }

    return (
        <div className={"mx-auto w-2/6 t-4"}>
            <div className={"flex items-center justify-start font-bold"}>
                <div className={"py-2"}>
                    {post.title}
                </div>
            </div>
            <div>
                <span>
                    {imageSrc &&
                        <img src={imageSrc} className={"w-[90px] h-[70px] object-cover"}
                             alt="placeholder image"/>
                    }
                </span>
                <span className={"flex flex-row py-2 justify-start"}>
                    {post.body}
                </span>
                <div className={"flex flex-row text-sm font-semibold gap-1 justify-start"}>
                    <button
                        className={"flex flex-col items-center rounded-full px-2 py-1 bg-gray-200"}
                        onClick={likeButton}>
                        <PiHeartFill></PiHeartFill>
                        {likes}
                    </button>
                    {post.user_id === auth.user?.id && (
                        <Link href={route('post.edit', post.id)}
                              className="px-2 py-1 bg-gray-200 rounded-full flex items-center px-sm">
                            <button
                                className={"bg-gray-200 rounded-full"}>
                                Edit
                            </button>
                        </Link>
                    )}
                    {post.user_id === auth.user?.id && (
                        <button
                            className={"px-2 py-1 bg-gray-200 rounded-full "}
                            onClick={handleDelete}>
                            Delete
                        </button>
                    )}
                </div>
                <div className={""}>
                    <Comment post={post} comments={comments}/>
                </div>
            </div>
        </div>
    )
}
