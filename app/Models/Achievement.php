<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Achievement extends Model
{
    /** @use HasFactory<\Database\Factories\AchievementFactory> */
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'judul', 'slug', 'deskripsi', 'tingkat', 'kategori',
        'pencapaian', 'tanggal', 'penyelenggara', 'featured_image', 'is_active',
    ];

    protected function casts(): array
    {
        return [
            'tanggal' => 'date',
            'is_active' => 'boolean',
        ];
    }
}
