import React from "react";
import {useForm} from "@inertiajs/react";
import {Textarea} from "flowbite-react";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";

export default function Comment({post, comments}) {
    const {data, setData, post: sendFn, processing, errors, reset} = useForm({
        body: '',
    });
    const onSubmit = (e) => {
        e.preventDefault();
        sendFn(route('post.comment', post.id))
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
                        <div>
                            {comments.map((comment, index) => (
                                <div>
                                    <div>
                                        {comment.body}
                                    </div>
                                    <div>
                                        {comment.user.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
