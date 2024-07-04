import NavBar from "@/Components/NavBar";
import {Head} from "@inertiajs/react";
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import 'react-tooltip/dist/react-tooltip.css'
import {Tooltip} from 'react-tooltip'


export default function Welcome({auth, posts}) {
    dayjs.extend(relativeTime);
    console.log(posts);

    function MouseOver(e) {
        return posts.map(post => {
            e.target.style.background = 'red';
            {
                post.body
            }
        })
    }


    function MouseOut(e) {
        e.target.style.background = "";

    }

    return (
        <>
            <div className={"bg-gray-100 min-h-screen"}>
                <Head title="Link It"/>
                <NavBar auth={auth}/>
                <div>
                    {posts.map(post => (
                        <div key={post.id} className={"p-4 border-b-2"}>
                            <span className={"text-xs text-gray-500"}
                                  data-tooltip-id={"my-tooltip"}
                                  data-tooltip-content={"Something"}
                            >{dayjs(post.created_at).fromNow()} test</span>
                            <p>
                                {post.body}
                            </p>

                            <a data-tooltip-id="my-tooltip" data-tooltip-content="Hello world!">
                                ◕‿‿◕
                                <Tooltip id="my-tooltip"/>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
