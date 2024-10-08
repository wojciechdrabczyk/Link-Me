<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Models\Post;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $posts = Post::latest()->with('author')->withCount('postVotes')->paginate(8);
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'posts' => $posts,
    ]);
})->name('index');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->group(function () {
    Route::get('/posts/create', [PostController::class, 'create'])->name('post.create');
    Route::post('/posts/', [PostController::class, 'store'])->name('post.store');
    Route::get('/posts/{post}/edit', [PostController::class, 'edit'])->name('post.edit');
    Route::get('/posts/{post}/like', [PostController::class, 'like'])->name('post.like');
    Route::get('/posts/{post}/dislike', [PostController::class, 'dislike'])->name('post.dislike');
    Route::post('/posts/{post}/comment', [PostController::class, 'comment'])->name('post.comment');
    Route::get('/comments/{comment}/heart', [PostController::class, 'heart'])->name('comment.heart');
    Route::patch('/posts/{post}', [PostController::class, 'update'])->name('post.update');
    Route::delete('/posts/{post}', [PostController::class, 'destroy'])->name('post.destroy');
});

Route::get('/posts/{post}', [PostController::class, 'show'])->name('post.show');

require __DIR__ . '/auth.php';
