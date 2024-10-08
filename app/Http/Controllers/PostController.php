<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\CommentVote;
use App\Models\Post;
use App\Models\Vote;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
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
            'thumbnail' => 'nullable|image|mimes:jpeg,png,jpg,svg,webp|max:2048',
        ]);
        $path = $request->file('thumbnail')?->storePublicly('public');
        if ($path !== null) {
            $path = Storage::url($path);
        }
        $user = $request->user();
        $user->posts()->create([...$validated, 'thumbnail' => $path]);
        return to_route('index');
    }

    public function show(Post $post)
    {
        return inertia('Post/Show', ['post' => $post, 'likes' => $post->voteCount(), 'comments' => $post->comments()->with('user')->withCount('votes')->get()]);
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
        $validated = $request->validate([
            'title' => 'required|min:2|max:255',
            'body' => 'required',
        ]);
        $post->update($validated);
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
            $existing->delete();
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

    public function comment(Request $request, Post $post)
    {
        $validated = $request->validate([
            'body' => 'required',
        ]);
        $user = $request->user();
        $post->comments()->create([...$validated, 'user_id' => $user->id]);
        return to_route('post.show', $post->id);
    }

    public function heart(Comment $comment, Request $request)
    {
        $existing = CommentVote::whereUserId($request->user()->id)->whereCommentId($comment->id)->first();
        if ($existing) {
            $existing->delete();
        } else {
            CommentVote::create(['user_id' => $request->user()->id, 'heart' => 1, 'comment_id' => $comment->id]);
        }
    }
}

