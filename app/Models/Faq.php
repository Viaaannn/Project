<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Faq extends Model
{
    /** @use HasFactory<\Database\Factories\FaqFactory> */
    use HasFactory;

    protected $fillable = ['pertanyaan', 'jawaban', 'kategori', 'is_active', 'order'];

    protected function casts(): array
    {
        return [
            'is_active' => 'boolean',
        ];
    }
}
