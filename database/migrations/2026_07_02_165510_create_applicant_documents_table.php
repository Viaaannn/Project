<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('applicant_documents', function (Blueprint $table) {
            $table->id();
            $table->foreignId('applicant_id')->constrained()->cascadeOnDelete();
            $table->enum('jenis_dokumen', ['pas_foto', 'kk', 'akta', 'ijazah', 'skhu', 'ktp_ayah', 'ktp_ibu', 'kip']);
            $table->string('original_name', 200);
            $table->string('stored_path', 500);
            $table->string('mime_type', 50);
            $table->unsignedInteger('file_size');
            $table->boolean('is_verified')->default(false);
            $table->timestamps();
            $table->index('applicant_id');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('applicant_documents');
    }
};
