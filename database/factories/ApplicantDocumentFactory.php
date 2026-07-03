<?php

namespace Database\Factories;

use App\Models\Applicant;
use Illuminate\Database\Eloquent\Factories\Factory;

class ApplicantDocumentFactory extends Factory
{
    public function definition(): array
    {
        return [
            'applicant_id' => Applicant::factory(),
            'jenis_dokumen' => fake()->randomElement([
                'pas_foto', 'kk', 'akta', 'ijazah', 'skhu', 'ktp_ayah', 'ktp_ibu', 'kip',
            ]),
            'original_name' => fake()->word() . '.pdf',
            'stored_path' => 'documents/' . fake()->uuid() . '.pdf',
            'mime_type' => 'application/pdf',
            'file_size' => fake()->numberBetween(100000, 2000000),
            'is_verified' => false,
        ];
    }
}
