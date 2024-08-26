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
                    <form onSubmit={onSubmit} method="post" className={"mt-4 space-y-3"}>
                        <div>
                            <InputLabel htmlFor="title" value="Title"/>

                            <Textarea
                                id="title"
                                name="title"
                                value={data.title}
                                className="mt-1 block w-full placeholder-red"
                                autoComplete="current-title"
                                placeholder="Title"
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
                                className="mt-1 block w-full placeholder-red"
                                autoComplete="current-body"
                                placeholder="Body"
                                onChange={(e) => setData('body', e.target.value)}
                            />


                            <InputError message={errors.body} className="mt-2"/>
                        </div>

                        <div>
                            <InputLabel value="Thumbnail" className={"mb-3"}/>
                            <input
                                type="file"
                                id="thumbnail"
                                style={{display: 'none'}}
                                name="thumbnail"
                                onChange={handleThumbnail}
                            />
                            <label htmlFor="thumbnail"
                                   className={"rounded-md bg-gray-800 p-2 text-white text-sm hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"}>Choose
                                a file</label>
                            {data.thumbnail?.name}

                            <InputError message={errors.thumbnail} className="mt-2"/>
                        </div>

                        <div className="flex items-center gap-4 py-2">

                            <PrimaryButton disabled={processing} className={"normal-case text-base p-2"}>
                                Post
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
