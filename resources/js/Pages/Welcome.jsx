import NavBar from "@/Components/NavBar";
import {Head} from "@inertiajs/react";
import React, {useState} from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export default function Welcome({auth, posts}) {
    dayjs.extend(relativeTime);
    console.log(posts);
    const [isHover, setHover] = useState(false);

    function MouseOver() {
        isHover(setdayjs.format('YYYY-MM-DD'));
    }

    function MouseOut() {
        setHover('');
    }
    return (
        <>
            <div className={"bg-gray-100 min-h-screen"}>
                <Head title="Link It"/>
                <NavBar auth={auth}/>
                <div>
                    {posts.map(post => (
                        <div key={post.id} className={"p-4 border-b-2"}>
                            <span className={"text-xs text-gray-500"} onMouseOver={MouseOver} onMouseOut={MouseOut}>{dayjs(post.created_at).fromNow()}</span>
                            <p>
                                {post.body}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
