<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('achievements', function (Blueprint $table) {
            $table->id();
            $table->string('judul', 200);
            $table->string('slug', 200)->unique();
            $table->text('deskripsi')->nullable();
            $table->enum('tingkat', ['Sekolah', 'Kecamatan', 'Kota', 'Provinsi', 'Nasional', 'Internasional']);
            $table->string('kategori', 50);
            $table->string('pencapaian', 100);
            $table->date('tanggal');
            $table->string('penyelenggara', 200);
            $table->string('featured_image', 500)->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
            $table->softDeletes();
            $table->index('tingkat');
            $table->index('kategori');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('achievements');
    }
};
