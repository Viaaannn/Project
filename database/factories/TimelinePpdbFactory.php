<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class TimelinePpdbFactory extends Factory
{
    public function definition(): array
    {
        $kegiatan = fake()->unique()->sentence(4);

        return [
            'kegiatan' => $kegiatan,
            'slug' => Str::slug($kegiatan),
            'deskripsi' => fake()->paragraph(),
            'tanggal_mulai' => fake()->dateTimeBetween('now', '+1 month'),
            'tanggal_selesai' => fake()->dateTimeBetween('+1 month', '+2 months'),
            'urutan' => fake()->numberBetween(1, 10),
            'is_active' => true,
        ];
    }
}
