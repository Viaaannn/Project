<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class FaqFactory extends Factory
{
    public function definition(): array
    {
        return [
            'pertanyaan' => fake()->sentence(8) . '?',
            'jawaban' => fake()->paragraphs(2, true),
            'kategori' => fake()->randomElement(['PPDB', 'Akademik', 'Kesiswaan', 'Umum']),
            'is_active' => true,
            'order' => fake()->numberBetween(0, 20),
        ];
    }
}
