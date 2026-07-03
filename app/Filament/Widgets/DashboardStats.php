<?php

namespace App\Filament\Widgets;

use App\Models\Applicant;
use App\Models\News;
use App\Models\Contact;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class DashboardStats extends StatsOverviewWidget
{
    protected ?string $heading = 'Ikhtisar PPDB';

    protected int | array | null $columns = [
        'default' => 1,
        'sm' => 2,
        'md' => 3,
        'xl' => 5,
    ];

    protected function getStats(): array
    {
        return [
            Stat::make('Total Pendaftar', Applicant::count())
                ->description('Semua waktu')
                ->descriptionIcon('heroicon-m-users')
                ->color('info'),
            Stat::make('Pendaftar Baru', Applicant::where('status', 'Pendaftar Baru')->count())
                ->description('Menunggu verifikasi')
                ->descriptionIcon('heroicon-m-clock')
                ->color('warning'),
            Stat::make('Lolos Administrasi', Applicant::where('status', 'Lolos Administrasi')->count())
                ->description('Tahap seleksi')
                ->descriptionIcon('heroicon-m-check-circle')
                ->color('success'),
            Stat::make('Butuh Revisi', Applicant::where('status', 'Butuh Revisi')->count())
                ->description('Perlu upload ulang')
                ->descriptionIcon('heroicon-m-exclamation-triangle')
                ->color('danger'),
            Stat::make('Total Berita', News::where('is_published', true)->count())
                ->description('Artikel terpublikasi')
                ->descriptionIcon('heroicon-m-newspaper')
                ->color('gray'),
        ];
    }
}
