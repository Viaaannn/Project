<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ApplicantStatusLog extends Model
{
    /** @use HasFactory<\Database\Factories\ApplicantStatusLogFactory> */
    use HasFactory;

    protected $fillable = [
        'applicant_id', 'old_status', 'new_status', 'changed_by', 'notes',
    ];

    public function applicant(): BelongsTo
    {
        return $this->belongsTo(Applicant::class);
    }

    public function changedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'changed_by');
    }
}
