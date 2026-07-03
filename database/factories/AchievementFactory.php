<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class AchievementFactory extends Factory
{
    public function definition(): array
    {
        $judul = fake()->unique()->sentence(4);

        return [
            'judul' => $judul,
            'slug' => Str::slug($judul),
            'deskripsi' => fake()->paragraphs(2, true),
            'tingkat' => fake()->randomElement(['Sekolah', 'Kecamatan', 'Kota', 'Provinsi', 'Nasional', 'Internasional']),
            'kategori' => fake()->randomElement(['Akademik', 'Olahraga', 'Seni', 'Keagamaan', 'Lainnya']),
            'pencapaian' => fake()->randomElement(['Juara 1', 'Juara 2', 'Juara 3', 'Harapan 1', 'Medali Emas', 'Medali Perak']),
            'tanggal' => fake()->dateTimeThisYear(),
            'penyelenggara' => fake()->company(),
            'is_active' => true,
        ];
    }
}
