<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ProgramFactory extends Factory
{
    public function definition(): array
    {
        $name = fake()->unique()->words(2, true);

        return [
            'name' => $name,
            'slug' => Str::slug($name),
            'description' => fake()->paragraphs(3, true),
            'keunggulan' => fake()->paragraphs(2, true),
            'kurikulum' => fake()->paragraphs(2, true),
            'icon' => fake()->randomElement(['book', 'school', 'graduation-cap', 'users']),
            'is_active' => true,
            'order' => fake()->numberBetween(0, 10),
        ];
    }
}
