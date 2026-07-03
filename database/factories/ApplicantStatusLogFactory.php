<?php

namespace Database\Factories;

use App\Models\Applicant;
use Illuminate\Database\Eloquent\Factories\Factory;

class ApplicantStatusLogFactory extends Factory
{
    public function definition(): array
    {
        return [
            'applicant_id' => Applicant::factory(),
            'old_status' => 'Pendaftar Baru',
            'new_status' => 'Perlu Verifikasi',
        ];
    }
}
