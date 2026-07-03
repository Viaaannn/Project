<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class ApplicantFactory extends Factory
{
    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'nama_lengkap' => fake()->name(),
            'tempat_lahir' => fake()->city(),
            'tanggal_lahir' => fake()->date('Y-m-d', '-13 years'),
            'jenis_kelamin' => fake()->randomElement(['Laki-laki', 'Perempuan']),
            'anak_ke' => fake()->numberBetween(1, 5),
            'jumlah_saudara' => fake()->numberBetween(0, 8),
            'alamat_lengkap' => fake()->address(),
            'provinsi' => fake()->state(),
            'kota' => fake()->city(),
            'kecamatan' => fake()->streetName(),
            'kelurahan' => fake()->streetName(),
            'whatsapp_santri' => fake()->numerify('08##########'),
            'nama_ayah' => fake()->name('male'),
            'pekerjaan_ayah' => fake()->jobTitle(),
            'pendidikan_ayah' => fake()->randomElement(['SD', 'SMP', 'SMA', 'D3', 'S1', 'S2', 'S3']),
            'hp_ayah' => fake()->numerify('08##########'),
            'nama_ibu' => fake()->name('female'),
            'pekerjaan_ibu' => fake()->jobTitle(),
            'pendidikan_ibu' => fake()->randomElement(['SD', 'SMP', 'SMA', 'D3', 'S1', 'S2', 'S3']),
            'hp_ibu' => fake()->numerify('08##########'),
            'alamat_orang_tua' => fake()->address(),
            'program_pendidikan' => fake()->randomElement(['SMP Darul Akhyar', 'MA Darul Akhyar']),
            'status' => fake()->randomElement([
                'Pendaftar Baru', 'Perlu Verifikasi', 'Lolos Administrasi',
                'Ditolak', 'Butuh Revisi', 'Lolos Seleksi', 'Selesai',
            ]),
        ];
    }
}
