import {useForm} from "@inertiajs/react";

export default function Edit({post, auth}) {

    // console.log(useForm());

    const {data, setData, patch, processing, errors} = useForm({
        title: post.title,
        body: post.body,
    });

    function handleEdit(e) {

        e.preventDefault();
        patch(route('post.update', post.id))
    }

    return (
        <div>
            <input type="text" value={data.title} onChange={e => setData('title', e.target.value)}/>
            <input type="text" value={data.body} onChange={e => setData('body', e.target.value)}/>
            <button className={"bg-green-400 rounded-md text-sm px-4 py-1 text-white"} onClick={handleEdit}>
                Edit Post
            </button>
        </div>
    )
}
