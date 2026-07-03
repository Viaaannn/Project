<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Ekskul extends Model
{
    /** @use HasFactory<\Database\Factories\EkskulFactory> */
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'nama', 'slug', 'deskripsi', 'pembina', 'hari',
        'jam_mulai', 'jam_selesai', 'icon', 'is_active', 'order',
    ];

    protected function casts(): array
    {
        return [
            'is_active' => 'boolean',
        ];
    }
}
