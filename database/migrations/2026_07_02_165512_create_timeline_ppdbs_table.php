<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('timeline_ppdbs', function (Blueprint $table) {
            $table->id();
            $table->string('kegiatan', 200);
            $table->string('slug', 200)->unique();
            $table->text('deskripsi')->nullable();
            $table->date('tanggal_mulai');
            $table->date('tanggal_selesai');
            $table->unsignedInteger('urutan')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
            $table->index('urutan');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('timeline_ppdbs');
    }
};
