<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('gallery_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('gallery_id')->constrained()->cascadeOnDelete();
            $table->string('caption', 200)->nullable();
            $table->string('file_path', 500);
            $table->string('thumbnail_path', 500)->nullable();
            $table->string('mime_type', 50);
            $table->unsignedInteger('order')->default(0);
            $table->timestamps();
            $table->index('gallery_id');
            $table->index('order');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('gallery_items');
    }
};
