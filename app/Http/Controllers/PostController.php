<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Vote;
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
        return inertia('Post/Show', ['post' => $post, 'likes' => $post->voteCount()]);
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

    public function like(Post $post, Request $request)
    {

        $existing = Vote::whereUserId($request->user()->id)->wherePostId($post->id)->first();
        if ($existing) {
            $existing->like = 1;
            $existing->save();
        } else {
            Vote::create(['user_id' => $request->user()->id, 'like' => 1, 'post_id' => $post->id]);
        }
    }

    public function dislike(Post $post, Request $request)
    {

        $existing = Vote::where('user_id', '=', $request->user()->id)->where('post_id', '=', $post->id)->first();
        if ($existing) {
            $existing->like = -1;
            $existing->save();
        } else {
            Vote::create(['user_id' => $request->user()->id, 'like' => -1, 'post_id' => $post->id]);
        }
    }
}

