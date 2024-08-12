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
            <div className={"space-y-6"}>
                <div className={"max-w-7xl sm:p-8  sm:rounded-lg"}>
                    <form onSubmit={onSubmit} method="post" className={"mt-6 space-y-6"}>
                        <div className="mt-4">
                            <Textarea
                                id="body"
                                name="body"
                                value={data.body}
                                className="mt-1 block w-full"
                                autoComplete="current-body"
                                onChange={(e) => setData('body', e.target.value)}
                            />
                            <InputError message={errors.body} className="mt-2"/>
                        </div>
                        <div className="flex items-center gap-4 mt-4">
                            <PrimaryButton disabled={processing}>
                                Submit
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
