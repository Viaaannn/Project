<?php

namespace Database\Factories;

use App\Models\NewsCategory;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class NewsFactory extends Factory
{
    public function definition(): array
    {
        $title = fake()->unique()->sentence(6);
        $categoryIds = \App\Models\NewsCategory::pluck('id')->toArray();

        return [
            'category_id' => fake()->randomElement($categoryIds),
            'title' => $title,
            'slug' => Str::slug($title),
            'excerpt' => fake()->paragraph(2),
            'content' => fake()->paragraphs(5, true),
            'featured_image' => 'news/' . fake()->uuid() . '.jpg',
            'author' => fake()->name(),
            'is_published' => true,
            'published_at' => fake()->dateTimeThisYear(),
        ];
    }
}
