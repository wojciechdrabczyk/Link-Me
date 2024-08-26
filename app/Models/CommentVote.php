<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\Pivot;

class CommentVote extends Pivot
{
    protected $table = 'comment_likes';

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function comment(): BelongsTo
    {
     return $this->belongsTo(Comment::class, 'comment_id');
    }
}
