<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ContactFactory extends Factory
{
    public function definition(): array
    {
        return [
            'nama' => fake()->name(),
            'email' => fake()->safeEmail(),
            'telepon' => fake()->numerify('08##########'),
            'pesan' => fake()->paragraphs(2, true),
            'is_read' => false,
            'is_active' => true,
            'order' => fake()->numberBetween(1, 10),
        ];
    }
}
