<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TimelinePpdb extends Model
{
    /** @use HasFactory<\Database\Factories\TimelinePpdbFactory> */
    use HasFactory;

    protected $fillable = [
        'kegiatan', 'slug', 'deskripsi', 'tanggal_mulai',
        'tanggal_selesai', 'urutan', 'is_active',
    ];

    protected function casts(): array
    {
        return [
            'tanggal_mulai' => 'date',
            'tanggal_selesai' => 'date',
            'is_active' => 'boolean',
        ];
    }
}
