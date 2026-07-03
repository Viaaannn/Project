<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Storage;

class ApplicantDocument extends Model
{
    /** @use HasFactory<\Database\Factories\ApplicantDocumentFactory> */
    use HasFactory;

    protected $fillable = [
        'applicant_id', 'jenis_dokumen', 'original_name', 'stored_path',
        'mime_type', 'file_size', 'is_verified',
    ];

    protected function casts(): array
    {
        return [
            'is_verified' => 'boolean',
        ];
    }

    protected static function booted(): void
    {
        static::deleted(function (ApplicantDocument $doc) {
            Storage::disk('public')->delete($doc->stored_path);
        });
    }

    public function applicant(): BelongsTo
    {
        return $this->belongsTo(Applicant::class);
    }
}
