export default function Show({post}) {
    return (
        <div>
            <div>
                {post.title}
            </div>
            <div>
                {post.body}
            </div>
            <div className={"flex flex-row gap-2"}>
                <form action="">
                    <button className={"bg-red-400 rounded-md text-sm px-4 py-1 text-white"}>
                        Delete
                    </button>
                </form>
                <form action="">
                    <button className={"bg-blue-400 rounded-md text-sm px-4 py-1 text-white"}>
                        Edit
                    </button>
                </form>
            </div>
        </div>
    )
}
