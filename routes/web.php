<?php

use App\Http\Controllers\FrontController;
use App\Http\Controllers\PPDBController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health', fn() => response('OK', 200));

// Admin login redirect — via /ppdb/daftar (satu pintu login)
Route::get('/admin/login', fn() => redirect('/ppdb/daftar'))->name('filament.admin.auth.login');

Route::get('/', [FrontController::class, 'home'])->name('home');
Route::get('/profil', [FrontController::class, 'profil'])->name('profil');
Route::get('/program', [FrontController::class, 'program'])->name('program');
Route::get('/ppdb', [FrontController::class, 'ppdb'])->name('ppdb');
Route::get('/ppdb/daftar', [FrontController::class, 'ppdbForm'])->name('ppdb.daftar');
Route::get('/ppdb/status', [FrontController::class, 'ppdbStatus'])->name('ppdb.status');
Route::post('/ppdb/daftar', [PPDBController::class, 'store'])->name('ppdb.store')->middleware('auth');
Route::get('/berita', [FrontController::class, 'berita'])->name('berita');
Route::get('/galeri', [FrontController::class, 'galeri'])->name('galeri');
Route::get('/kontak', [FrontController::class, 'kontak'])->name('kontak');
Route::get('/faq', [FrontController::class, 'faq'])->name('faq');
Route::get('/prestasi', [FrontController::class, 'prestasi'])->name('prestasi');

Route::get('/dashboard', fn() => redirect('/ppdb/daftar'))
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
