<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function create(Request $request)
    {
        return inertia('Post/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|min:2|max:255',
            'body' => 'required',
        ]);
        $user = $request->user();
        $user->posts()->create($validated);
        return to_route('index');
    }

    public function show(Post $post)
    {
        return inertia('Post/Show', ['post' => $post]);
    }
}
