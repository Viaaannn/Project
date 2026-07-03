<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class GalleryItem extends Model
{
    /** @use HasFactory<\Database\Factories\GalleryItemFactory> */
    use HasFactory;

    protected $fillable = [
        'gallery_id', 'caption', 'file_path', 'thumbnail_path', 'mime_type', 'order',
    ];

    public function gallery(): BelongsTo
    {
        return $this->belongsTo(Gallery::class);
    }
}
