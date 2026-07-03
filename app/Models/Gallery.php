<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Gallery extends Model
{
    /** @use HasFactory<\Database\Factories\GalleryFactory> */
    use HasFactory, SoftDeletes;

    protected $fillable = ['title', 'slug', 'description', 'type'];

    public function items(): HasMany
    {
        return $this->hasMany(GalleryItem::class);
    }
}
