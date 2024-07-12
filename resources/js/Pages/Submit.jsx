import React from 'react'
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {Head} from "@inertiajs/react";

export default function Submit({auth}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Submit a new post</h2>}
        >
            <Head title="Submit" />
        </AuthenticatedLayout>
    );
}
