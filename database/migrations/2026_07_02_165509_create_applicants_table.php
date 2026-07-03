<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('applicants', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('nama_lengkap', 100);
            $table->string('tempat_lahir', 50);
            $table->date('tanggal_lahir');
            $table->enum('jenis_kelamin', ['Laki-laki', 'Perempuan']);
            $table->unsignedTinyInteger('anak_ke');
            $table->unsignedTinyInteger('jumlah_saudara');
            $table->text('alamat_lengkap');
            $table->string('provinsi', 50);
            $table->string('kota', 50);
            $table->string('kecamatan', 50);
            $table->string('kelurahan', 50);
            $table->string('whatsapp_santri', 20);
            $table->string('nama_ayah', 100);
            $table->string('pekerjaan_ayah', 100)->nullable();
            $table->string('pendidikan_ayah', 50)->nullable();
            $table->string('hp_ayah', 20);
            $table->string('nama_ibu', 100);
            $table->string('pekerjaan_ibu', 100)->nullable();
            $table->string('pendidikan_ibu', 50)->nullable();
            $table->string('hp_ibu', 20);
            $table->text('alamat_orang_tua');
            $table->string('nama_wali', 100)->nullable();
            $table->string('hubungan_wali', 50)->nullable();
            $table->string('hp_wali', 20)->nullable();
            $table->enum('program_pendidikan', ['SMP Darul Akhyar', 'MA Darul Akhyar']);
            $table->json('program_unggulan')->nullable();
            $table->enum('status', [
                'Pendaftar Baru',
                'Perlu Verifikasi',
                'Lolos Administrasi',
                'Ditolak',
                'Butuh Revisi',
                'Lolos Seleksi',
                'Selesai'
            ])->default('Pendaftar Baru');
            $table->text('admin_notes')->nullable();
            $table->foreignId('verified_by')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamps();
            $table->softDeletes();
            $table->index('status');
            $table->index('program_pendidikan');
            $table->index('created_at');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('applicants');
    }
};
