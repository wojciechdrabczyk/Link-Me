import {useForm} from "@inertiajs/react";
import UpdatePasswordForm from "@/Pages/Profile/Partials/UpdatePasswordForm.jsx";
import DeleteUserForm from "@/Pages/Profile/Partials/DeleteUserForm.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {Transition} from "@headlessui/react";
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import {Textarea} from "flowbite-react";

export default function Edit({post, auth, className = ''}) {

    // console.log(useForm());

    const {data, setData, patch, processing, errors, recentlySuccessful} = useForm({
        title: post.title,
        body: post.body,
    });

    function handleEdit(e) {

        e.preventDefault();
        patch(route('post.update', post.id))
    }

    return (
        <section className={"mx-auto w-1/4 mt-4"}>
            <div className={"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6"}>
                <div className={"sm:p-8 bg-white shadow sm:rounded-lg"}>
                    <header>
                        <h2 className="text-lg font-medium text-gray-900">Edit post</h2>
                        <p className="mt-1 text-sm text-gray-600">
                            Update your post information.
                        </p>
                    </header>

                    <form onSubmit={handleEdit} className="mt-6 space-y-6">
                        <div>
                            <InputLabel htmlFor="name" value="Title"/>

                            <Textarea
                                id="text"
                                type="text"
                                className="mt-1 block w-full"
                                value={data.title}
                                onChange={(e) => setData('title', e.target.value)}
                                required
                                isFocused
                            />

                            <InputError className="mt-2" message={errors.title}/>
                        </div>

                        <div>
                            <InputLabel htmlFor="name" value="Body"/>

                            <Textarea
                                id="text"
                                type="text"
                                className="mt-1 block w-full"
                                value={data.body}
                                onChange={(e) => setData('body', e.target.value)}
                                required
                            />

                            <InputError className="mt-2" message={errors.body}/>
                        </div>

                        <div className={"flex items-center gap-4 mt-4"}>
                            <PrimaryButton onClick={handleEdit}>Save</PrimaryButton>
                            <Transition
                                show={recentlySuccessful}
                                enter="transition ease-in-out"
                                enterFrom="opacity-0"
                                leave="transition ease-in-out"
                                leaveTo="opacity-0"
                            >
                            </Transition>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
