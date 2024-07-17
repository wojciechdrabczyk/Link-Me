import {Head, router} from "@inertiajs/react";
import React, {useState} from "react";
import Post from "@/Components/Post.jsx";
import {Pagination} from "flowbite-react";
export default function Welcome({auth, posts}) {

    const onPageChange = (page) => {
        router.visit(`?page=${page}`, {replace: true, preserveScroll: true});
    }

    // console.log(posts)

    return (
        <div className={"mx-auto w-full"}
        >
            <div className={"bg-gray-100 max-w-7xl mx-auto sm:px-6 lg:px-8"}>
                <Head title="Link It"/>
                {posts.data.map(post => <Post key={post.id} post={post}/>)}
            </div>

            <div className={"flex overflow-x-auto sm:justify-center"}>
                <Pagination currentPage={posts.current_page} totalPages={posts.last_page}
                            onPageChange={onPageChange}/>
            </div>
        </div>
    );
}
