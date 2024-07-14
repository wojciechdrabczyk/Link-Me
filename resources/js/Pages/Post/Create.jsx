import React from 'react'
import {Head, useForm} from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {Textarea} from "flowbite-react";

export default function Create() {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        body: '',
    });
    const onSubmit = (e) => {
        e.preventDefault();
        post(route('post.store'))
        console.log(data)
    }
    return (
        <div className={"mx-auto w-96 mt-4"}
        >
            <Head title="Create new post" />
                <form onSubmit={onSubmit} method="post">
                    <div>
                        <InputLabel htmlFor="title" value="Title"/>

                        <TextInput
                            id="title"
                            name="title"
                            value={data.title}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('title', e.target.value)}
                        />

                        <InputError message={errors.title} className="mt-2"/>
                    </div>

                    <div className="mt-4">
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


                    <div className="flex items-center justify-end mt-4">

                        <PrimaryButton className="ms-4" disabled={processing}>
                            Submit
                        </PrimaryButton>
                    </div>
                </form>
        </div>
    );
}
