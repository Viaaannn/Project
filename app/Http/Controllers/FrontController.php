<?php

namespace App\Http\Controllers;

use App\Models\Achievement;
use App\Models\Ekskul;
use App\Models\Faq;
use App\Models\News;
use App\Models\Program;
use App\Models\TimelinePpdb;
use Inertia\Inertia;

class FrontController extends Controller
{
    public function home()
    {
        return Inertia::render('Front/Home', [
            'news' => News::with('category')
                ->where('is_published', true)
                ->latest('published_at')
                ->take(3)
                ->get()
                ->map(fn($n) => [
                    'id' => (string) $n->id,
                    'title' => $n->title,
                    'excerpt' => $n->excerpt,
                    'image' => $n->featured_image,
                    'category' => $n->category?->name ?? 'Umum',
                    'date' => $n->published_at?->format('Y-m-d') ?? $n->created_at->format('Y-m-d'),
                    'author' => $n->author,
                ]),
            'programs' => Program::where('is_active', true)->orderBy('order')->get(),
            'stats' => [
                'santriAktif' => 850,
                'tenagaPengajar' => 42,
                'programUnggulan' => 6,
                'akreditasi' => 'A',
            ],
        ]);
    }

    public function profil()
    {
        return Inertia::render('Front/Profil');
    }

    public function program()
    {
        return Inertia::render('Front/Program', [
            'programs' => Program::where('is_active', true)->orderBy('order')->get()->map(fn($p) => [
                'id' => (string) $p->id,
                'title' => $p->name,
                'slug' => $p->slug,
                'tagline' => $p->description,
                'description' => $p->description,
                'image' => $p->featured_image,
                'advantages' => $p->keunggulan ?? [],
                'curriculum' => $p->kurikulum ?? [],
            ]),
            'ekskuls' => Ekskul::where('is_active', true)->orderBy('order')->get()->map(fn($e) => [
                'id' => (string) $e->id,
                'name' => $e->nama,
                'slug' => $e->slug,
                'description' => $e->deskripsi,
                'pembina' => $e->pembina,
                'hari' => $e->hari,
                'jamMulai' => $e->jam_mulai,
                'jamSelesai' => $e->jam_selesai,
                'icon' => $e->icon,
            ]),
        ]);
    }

    public function ppdb()
    {
        return Inertia::render('Front/PPDBInfo', [
            'timeline' => TimelinePpdb::where('is_active', true)->orderBy('urutan')->get()->map(fn($t) => [
                'id' => (string) $t->id,
                'stageName' => $t->nama_tahap,
                'startDate' => $t->tanggal_mulai?->format('Y-m-d'),
                'endDate' => $t->tanggal_selesai?->format('Y-m-d'),
                'isActive' => $t->is_active,
            ]),
        ]);
    }

    public function ppdbForm()
    {
        return Inertia::render('Front/PPDBForm');
    }

    public function ppdbStatus()
    {
        return Inertia::render('Front/PPDBStatus', [
            'applicants' => \App\Models\Applicant::with('user')->latest()->get()->map(fn($a) => [
                'id' => (string) $a->id,
                'regNumber' => 'REG-' . $a->id,
                'namaLengkap' => $a->nama_lengkap,
                'programPendidikan' => $a->program_pendidikan,
                'programUnggulan' => $a->program_unggulan ?? [],
                'createdAt' => $a->created_at?->toIso8601String(),
                'status' => $a->status,
                'adminNotes' => $a->admin_notes,
            ]),
        ]);
    }

    public function berita()
    {
        return Inertia::render('Front/Berita', [
            'news' => News::with('category')
                ->where('is_published', true)
                ->latest('published_at')
                ->get()
                ->map(fn($n) => [
                    'id' => (string) $n->id,
                    'title' => $n->title,
                    'excerpt' => $n->excerpt,
                    'content' => $n->content,
                    'image' => $n->featured_image,
                    'category' => $n->category?->name ?? 'Umum',
                    'date' => $n->published_at?->format('Y-m-d') ?? $n->created_at->format('Y-m-d'),
                    'author' => $n->author,
                ]),
            'categories' => \App\Models\NewsCategory::all()->pluck('name'),
        ]);
    }

    public function galeri()
    {
        return Inertia::render('Front/Galeri', [
            'galleries' => \App\Models\Gallery::with('items')->where('is_active', true)->latest()->get(),
        ]);
    }

    public function kontak()
    {
        return Inertia::render('Front/Kontak', [
            'contacts' => \App\Models\Contact::where('is_active', true)->orderBy('order')->get(),
        ]);
    }

    public function faq()
    {
        return Inertia::render('Front/FAQ', [
            'faqs' => Faq::where('is_active', true)->orderBy('order')->get()->map(fn($f) => [
                'id' => (string) $f->id,
                'question' => $f->pertanyaan,
                'answer' => $f->jawaban,
            ]),
        ]);
    }

    public function prestasi()
    {
        return Inertia::render('Front/Prestasi', [
            'achievements' => Achievement::where('is_active', true)->latest('tanggal')->get()->map(fn($a) => [
                'id' => (string) $a->id,
                'title' => $a->nama_prestasi,
                'winner' => $a->pemenang,
                'rank' => $a->peringkat,
                'level' => $a->tingkat,
                'category' => $a->kategori,
                'year' => $a->tanggal?->format('Y') ?? '',
            ]),
        ]);
    }
}
