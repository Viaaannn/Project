<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class EkskulFactory extends Factory
{
    public function definition(): array
    {
        $nama = fake()->unique()->words(2, true);

        return [
            'nama' => $nama,
            'slug' => Str::slug($nama),
            'deskripsi' => fake()->paragraphs(2, true),
            'pembina' => fake()->name(),
            'hari' => fake()->randomElement([
                'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu',
            ]),
            'jam_mulai' => fake()->randomElement(['14:00', '15:00', '16:00']),
            'jam_selesai' => fake()->randomElement(['16:00', '17:00', '18:00']),
            'icon' => fake()->randomElement(['music', 'ball', 'book', 'palette', 'laptop']),
            'is_active' => true,
            'order' => fake()->numberBetween(0, 10),
        ];
    }
}
