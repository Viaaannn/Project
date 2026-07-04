<?php

namespace Database\Seeders;

use App\Models\Achievement;
use App\Models\Applicant;
use App\Models\ApplicantDocument;
use App\Models\Contact;
use App\Models\Ekskul;
use App\Models\Faq;
use App\Models\Gallery;
use App\Models\GalleryItem;
use App\Models\News;
use App\Models\NewsCategory;
use App\Models\Page;
use App\Models\Program;
use App\Models\TimelinePpdb;
use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->createRolesAndPermissions();
        $this->createAdminUser();
        $this->createDummyData();
    }

    private function createRolesAndPermissions(): void
    {
        $permissions = [
            'view_applicants', 'verify_applicants', 'manage_applicants',
            'view_news', 'create_news', 'edit_news', 'delete_news',
            'view_pages', 'create_pages', 'edit_pages', 'delete_pages',
            'view_galleries', 'manage_galleries',
            'view_programs', 'manage_programs',
            'view_achievements', 'manage_achievements',
            'view_ekskuls', 'manage_ekskuls',
            'view_faqs', 'manage_faqs',
            'view_contacts', 'manage_contacts',
            'view_timeline', 'manage_timeline',
            'view_users', 'manage_users',
            'view_reports',
        ];

        foreach ($permissions as $perm) {
            Permission::firstOrCreate(['name' => $perm]);
        }

        $roles = [
            'Super Admin' => $permissions,
            'Admin PPDB' => ['view_applicants', 'verify_applicants', 'manage_applicants', 'view_reports'],
            'Admin Konten' => ['view_news', 'create_news', 'edit_news', 'delete_news', 'view_pages', 'create_pages', 'edit_pages', 'delete_pages', 'view_galleries', 'manage_galleries', 'view_programs', 'manage_programs'],
            'Admin Sekolah' => ['view_news', 'view_pages', 'view_galleries', 'view_programs', 'view_achievements', 'manage_achievements', 'view_ekskuls', 'manage_ekskuls', 'view_faqs', 'manage_faqs'],
            'Operator' => ['view_applicants', 'view_news', 'view_pages', 'view_galleries', 'view_programs', 'view_achievements', 'view_ekskuls', 'view_faqs'],
        ];

        foreach ($roles as $roleName => $rolePerms) {
            $role = Role::firstOrCreate(['name' => $roleName]);
            $role->givePermissionTo($rolePerms);
        }
    }

    private function createAdminUser(): void
    {
        $admin = User::firstOrCreate(
            ['email' => 'admin@darulakhyar.sch.id'],
            [
                'name' => 'Administrator',
                'whatsapp' => '081234567890',
                'password' => bcrypt('password'),
            ]
        );

        $admin->assignRole('Super Admin');
    }

    private function createDummyData(): void
    {
        // Categories
        $categoryNames = ['Kegiatan', 'Prestasi', 'Pengumuman', 'Pesantren', 'SMP', 'MA'];
        $categories = [];
        foreach ($categoryNames as $name) {
            $slug = Str::slug($name);
            $categories[] = NewsCategory::firstOrCreate(
                ['slug' => $slug],
                [
                    'name' => $name,
                    'description' => 'Kategori ' . $name,
                ]
            );
        }

        // News
        News::factory()->count(20)->create();

        // Pages
        Page::factory()->count(3)->create();

        // Programs
        $programs = [
            ['name' => 'SMP Darul Akhyar', 'slug' => 'smp-darul-akhyar', 'description' => 'Program pendidikan tingkat menengah pertama berbasis pesantren.', 'is_active' => true, 'order' => 1],
            ['name' => 'MA Darul Akhyar', 'slug' => 'ma-darul-akhyar', 'description' => 'Program pendidikan tingkat menengah atas berbasis pesantren.', 'is_active' => true, 'order' => 2],
        ];

        foreach ($programs as $program) {
            Program::firstOrCreate(['slug' => $program['slug']], $program);
        }

        // Galleries
        Gallery::factory()->count(4)->create()->each(function ($gallery) {
            GalleryItem::factory()->count(6)->create([
                'gallery_id' => $gallery->id,
            ]);
        });

        // Applicants
        Applicant::factory()->count(15)->create()->each(function ($applicant) {
            ApplicantDocument::factory()->count(3)->create([
                'applicant_id' => $applicant->id,
            ]);
        });

        // Ekskuls
        $ekskuls = [
            ['nama' => 'Pramuka', 'slug' => 'pramuka', 'deskripsi' => 'Kegiatan kepramukaan untuk membentuk karakter kepemimpinan.', 'pembina' => 'Ust. Ahmad', 'hari' => 'Jumat', 'jam_mulai' => '14:00', 'jam_selesai' => '17:00', 'icon' => 'book', 'is_active' => true, 'order' => 1],
            ['nama' => 'Futsal', 'slug' => 'futsal', 'deskripsi' => 'Olahraga futsal untuk mengembangkan bakat dan kebugaran.', 'pembina' => 'Ust. Budi', 'hari' => 'Sabtu', 'jam_mulai' => '07:00', 'jam_selesai' => '09:00', 'icon' => 'ball', 'is_active' => true, 'order' => 2],
            ['nama' => 'Tahfidz', 'slug' => 'tahfidz', 'deskripsi' => 'Program menghafal Al-Quran.', 'pembina' => 'Ust. Rudi', 'hari' => 'Senin', 'jam_mulai' => '05:00', 'jam_selesai' => '06:30', 'icon' => 'book', 'is_active' => true, 'order' => 3],
            ['nama' => 'Kaligrafi', 'slug' => 'kaligrafi', 'deskripsi' => 'Seni menulis Arab yang indah.', 'pembina' => 'Ust. Dodi', 'hari' => 'Rabu', 'jam_mulai' => '15:00', 'jam_selesai' => '17:00', 'icon' => 'palette', 'is_active' => true, 'order' => 4],
        ];

        foreach ($ekskuls as $ekskul) {
            Ekskul::firstOrCreate(['slug' => $ekskul['slug']], $ekskul);
        }

        // Achievements
        Achievement::factory()->count(10)->create();

        // FAQs
        Faq::factory()->count(10)->create();

        // Contacts
        Contact::factory()->count(5)->create();

        // Timeline PPDB
        $timeline = [
            ['kegiatan' => 'Pendaftaran Dibuka', 'slug' => 'pendaftaran-dibuka', 'deskripsi' => 'Pembukaan pendaftaran PPDB online.', 'tanggal_mulai' => '2026-01-15', 'tanggal_selesai' => '2026-03-31', 'urutan' => 1, 'is_active' => true],
            ['kegiatan' => 'Verifikasi Berkas', 'slug' => 'verifikasi-berkas', 'deskripsi' => 'Verifikasi kelengkapan dokumen persyaratan.', 'tanggal_mulai' => '2026-04-01', 'tanggal_selesai' => '2026-04-30', 'urutan' => 2, 'is_active' => true],
            ['kegiatan' => 'Seleksi', 'slug' => 'seleksi', 'deskripsi' => 'Pelaksanaan tes seleksi akademik dan wawancara.', 'tanggal_mulai' => '2026-05-01', 'tanggal_selesai' => '2026-05-31', 'urutan' => 3, 'is_active' => true],
            ['kegiatan' => 'Pengumuman', 'slug' => 'pengumuman', 'deskripsi' => 'Pengumuman hasil seleksi PPDB.', 'tanggal_mulai' => '2026-06-15', 'tanggal_selesai' => '2026-06-15', 'urutan' => 4, 'is_active' => true],
            ['kegiatan' => 'Daftar Ulang', 'slug' => 'daftar-ulang', 'deskripsi' => 'Registrasi ulang bagi calon santri yang lolos seleksi.', 'tanggal_mulai' => '2026-06-16', 'tanggal_selesai' => '2026-07-10', 'urutan' => 5, 'is_active' => true],
        ];

        foreach ($timeline as $item) {
            TimelinePpdb::firstOrCreate(['slug' => $item['slug']], $item);
        }
    }
}
