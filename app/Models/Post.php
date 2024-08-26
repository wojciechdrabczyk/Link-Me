<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\DB;

class Post extends Model
{
    use HasFactory;

    public $fillable = ['title', 'body', 'thumbnail'];

    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function postVotes(): HasMany
    {
        return $this->hasMany(Vote::class);
    }

    public function voteCount(): int
    {
        return DB::table('post_likes')->where('post_id', '=', $this->id)->sum('like');
    }

    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class);
    }
}
