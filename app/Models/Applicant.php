<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;

class Applicant extends Model
{
    /** @use HasFactory<\Database\Factories\ApplicantFactory> */
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id', 'nama_lengkap', 'tempat_lahir', 'tanggal_lahir',
        'jenis_kelamin', 'anak_ke', 'jumlah_saudara', 'alamat_lengkap',
        'provinsi', 'kota', 'kecamatan', 'kelurahan', 'whatsapp_santri',
        'nama_ayah', 'pekerjaan_ayah', 'pendidikan_ayah', 'hp_ayah',
        'nama_ibu', 'pekerjaan_ibu', 'pendidikan_ibu', 'hp_ibu',
        'alamat_orang_tua', 'nama_wali', 'hubungan_wali', 'hp_wali',
        'program_pendidikan', 'program_unggulan',
        'status', 'admin_notes', 'verified_by',
    ];

    protected function casts(): array
    {
        return [
            'tanggal_lahir' => 'date',
            'program_unggulan' => 'json',
        ];
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function documents(): HasMany
    {
        return $this->hasMany(ApplicantDocument::class);
    }

    public function statusLogs(): HasMany
    {
        return $this->hasMany(ApplicantStatusLog::class);
    }

    public function verifiedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'verified_by');
    }

    protected static function booted(): void
    {
        static::forceDeleted(function (Applicant $applicant) {
            Storage::disk('public')->deleteDirectory('applicant_documents/' . $applicant->id);
        });
    }
}
