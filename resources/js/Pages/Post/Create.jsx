import React from 'react'
import {Head, useForm} from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {Textarea} from "flowbite-react";

export default function Create() {
    const {data, setData, post, processing, errors, reset} = useForm({
        title: '',
        body: '',
        thumbnail: null,
    })
    const handleThumbnail = (e) => {
        setData('thumbnail', e.target.files[0]);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        post(route('post.store'))
        // console.log(data)
    }
    return (
        <div className={"mx-auto w-1/4 mt-4"}>
            <div className={"space-y-6"}>
                <div className={"max-w-7xl sm:p-8 bg-white shadow sm:rounded-lg"}>
                    <header>
                        <h2 className="text-lg font-medium text-gray-900">Create post</h2>
                    </header>
                    <Head title="Create new post"/>
                    <form onSubmit={onSubmit} method="post" className={"mt-6 space-y-6"}>
                        <div>
                            <InputLabel htmlFor="title" value="Title"/>

                            <Textarea
                                id="title"
                                name="title"
                                value={data.title}
                                className="mt-1 block w-full"
                                autoComplete="current-title"
                                onChange={(e) => setData('title', e.target.value)}
                            />

                            <InputError message={errors.title} className="mt-2"/>
                        </div>

                        <div>
                            <InputLabel htmlFor="body" value="Body"/>

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

                        <div>

                            <input
                                type="file"
                                title=" "
                                id="thumbnail"
                                style={{display: 'none'}}
                                name="thumbnail"
                                className="mt-1 rounded-md bg-amber-600"
                                onChange={handleThumbnail}
                            />
                            <label htmlFor="thumbnail" className={"mt-1 rounded-md bg-amber-600 p-4 text-white"}>Select file</label>
                            {data.thumbnail?.name}
                            <InputError message={errors.thumbnail} className="mt-2"/>
                        </div>



                        <div className="flex items-center gap-4 mt-4">

                            <PrimaryButton disabled={processing}>
                                Submit
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
