<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('faqs', function (Blueprint $table) {
            $table->id();
            $table->text('pertanyaan');
            $table->longText('jawaban');
            $table->string('kategori', 50)->nullable();
            $table->boolean('is_active')->default(true);
            $table->unsignedInteger('order')->default(0);
            $table->timestamps();
            $table->index('kategori');
            $table->index('order');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('faqs');
    }
};
