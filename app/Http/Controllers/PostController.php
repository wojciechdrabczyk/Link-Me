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
        if ($request->user()->cannot('delete', $post)) {
            abort(403, "No permission to delete other person's post.");
        }
        $post->delete();
        return to_route('index');
    }

    public function update(Post $post, Request $request)
    {
        if ($request->user()->cannot('update', $post)) {
            abort(403, "No permission to update other person's post.");
        }
        $data = $request->all();
        $post->update($data);
        return to_route('index');
    }

    public function edit(Post $post, Request $request)
    {
        if ($request->user()->cannot('edit', $post)) {
            abort(403, "No permission to edit other person's post.");
        }
        return inertia('Post/Edit', ['post' => $post]);
    }
}
