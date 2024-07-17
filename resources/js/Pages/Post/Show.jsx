import {Link, useForm, usePage} from "@inertiajs/react";

export default function Show({post, auth}) {

    console.log(useForm());
    const { delete: destroy } = useForm();
    function handleDelete(e) {
        e.preventDefault();
        destroy(post.id);
    }
    return (
        <div>
            <div>
                {post.title}
            </div>
            <div>
                {post.body}
            </div>
            <div className={"flex flex-row gap-2"}>
                {post.user_id === auth.user?.id && (
                    <button className={"bg-red-400 rounded-md text-sm px-4 py-1 text-white"} onClick={handleDelete}>
                        Delete
                    </button>
                )}
                {post.user_id === auth.user?.id && (
                    <Link href={route('post.edit', post.id)}>
                        <button className={"bg-blue-400 rounded-md text-sm px-4 py-1 text-white"}>
                            Edit
                        </button>
                    </Link>
                )}
            </div>
        </div>
    )
}
