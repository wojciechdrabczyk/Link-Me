<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

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

    public function destroy(Post $post, Request $request)
    {
        $user = $request->user();
        if ($post->user_id === $user->id) {
            $post->delete();
        } else {
            throw ValidationException::withMessages(['user_id' => 'Only the author of this post can delete it.']);
        }

        return to_route('index');
    }

    public function update(Post $post, Request $request)
    {
        $user = $request->user();
        if($post->user_id === $user->id) {
            $data = $request->all();
            $post->update($data);
        } else {
            abort('400', 'Only the author of this post can update it.');
        }
        return to_route('index');
    }

    public function edit(Post $post)
    {
        return inertia('Post/Edit', ['post' => $post]);
    }
}
