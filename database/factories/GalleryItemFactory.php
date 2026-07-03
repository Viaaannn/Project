<?php

namespace Database\Factories;

use App\Models\Gallery;
use Illuminate\Database\Eloquent\Factories\Factory;

class GalleryItemFactory extends Factory
{
    public function definition(): array
    {
        return [
            'gallery_id' => Gallery::factory(),
            'caption' => fake()->sentence(),
            'file_path' => 'galleries/' . fake()->uuid() . '.jpg',
            'thumbnail_path' => 'galleries/thumb_' . fake()->uuid() . '.jpg',
            'mime_type' => 'image/jpeg',
            'order' => fake()->numberBetween(0, 20),
        ];
    }
}
