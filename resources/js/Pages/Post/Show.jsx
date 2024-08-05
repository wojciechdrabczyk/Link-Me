import {Link, useForm, usePage} from "@inertiajs/react";
import React from "react";

export default function Show({post, auth}) {
    const imageSrc = post.thumbnail ? post.thumbnail : `https://picsum.photos/id/${post.id}/300/200`;
    console.log(useForm());
    const {delete: destroy} = useForm();

    function handleDelete(e) {
        e.preventDefault();
        destroy(post.id);
    }

    return (
        <div className={"mx-auto w-96 mt-4"}>
            <div className={"w-full p-4 text-xl flex flex-row items-center gap-10 px-4 sm:px-6 lg:px-8"}>
                <img src={imageSrc} className={"w-[90px] h-[70px] object-cover flex flex-row gap-4"}
                     alt="Placeholder image"/>
                <div className={""}>
                    {post.title}
                </div>
            </div>
            <div className={""}>
                {post.body}
                <div className={"flex flex-row gap-2 text-xs p-2"}>
                    {post.user_id === auth.user?.id && (
                        <button className={"bg-gray-300 rounded-md px-1.5 py-1 border-md flex flex-row justify-center items-center mr-sm h-xl font-semibold relative text-12 button-secondary px-sm"} onClick={handleDelete}>
                            Delete
                        </button>
                    )}
                    {post.user_id === auth.user?.id && (
                        <Link href={route('post.edit', post.id)}>
                            <button className={"bg-gray-300 rounded-md px-1.5 py-1 border-md flex flex-row justify-center items-center mr-sm h-xl font-semibold relative text-12 button-secondary px-sm"}>
                                Edit
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}
