import React from "react";
import {useForm} from "@inertiajs/react";
import {Textarea} from "flowbite-react";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import Date from "@/Components/Date.jsx";
import {PiHeartFill} from "react-icons/pi";

export default function Comment({post, comments}) {
    const {data, setData, post: sendFn, processing, errors} = useForm({
       body: '',
    });
    const {get: heart} = useForm({

    });
    const onSubmit = (e) => {
        e.preventDefault();
        sendFn(route('post.comment', post.id))
    }

    function likeButton(e) {
        e.preventDefault();
        sendFn(route('post.like', post.id))
    }

    function heartButton(e, comment_id) {
        e.preventDefault();
        heart(route('comment.heart', comment_id))
    }

    return (
        <div>
            <div className={"flex flex-row items-center justify-center"}>
                <div className={"mx-auto w-full t-4"}>
                    <form onSubmit={onSubmit} method="post" className={"mt-4 space-y-4"}>
                        <div>
                            <Textarea
                                id="body"
                                name="body"
                                value={data.body}
                                className="mt-1 block w-full"
                                autoComplete="current-body"
                                onChange={(e) => setData('body', e.target.value)}
                                placeholder="Add a comment"
                            />
                            <InputError message={errors.body} className="mt-2"/>
                        </div>
                        <div>
                            <PrimaryButton disabled={processing}>
                                Comment
                            </PrimaryButton>
                        </div>
                        <div key={post.id}>
                            {comments.map((comment, index) => (
                                <div>
                                    <div className={"text-sm"}>
                                        {comment.user.name}
                                        <span className={"text-gray-500"}>
                                            {" • "}
                                            <Date post={comment}/>
                                        </span>
                                    </div>
                                    <div className={"pb-1"}>
                                        {comment.body}
                                    </div>
                                    <button
                                        className={"flex flex-row items-center rounded-full px-2 py-2 gap-1 bg-gray-200"}
                                        onClick={(e) => heartButton(e, comment.id)}>
                                        <PiHeartFill></PiHeartFill>
                                        {comment.votes_count > 0 && comment.votes_count}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
