<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\Pivot;

class Comment extends Model
{
    protected $table = 'comments';
    protected $fillable = ['user_id', 'post_id', 'body'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function post(): BelongsTo
    {
        return $this->belongsTo(Post::class, 'post_id');
    }

    public function parent(): ?BelongsTo
    {
        return $this->belongsTo(Comment::class, 'parent_id');
    }
}
