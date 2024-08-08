<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\Pivot;

class Vote extends Pivot
{
    protected $table = 'post_likes';

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function post(): BelongsTo
    {
     return $this->belongsTo(Post::class, 'post_id');
    }
}
