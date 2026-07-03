<?php

namespace App\Filament\Widgets;

use App\Models\Applicant;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget;

class RecentRegistrations extends TableWidget
{
    protected int | string | array $columnSpan = 'full';

    public function table(Table $table): Table
    {
        return $table
            ->query(
                Applicant::with('user')->latest()->limit(10)
            )
            ->heading('Pendaftar Terbaru')
            ->columns([
                TextColumn::make('created_at')
                    ->label('Tgl Daftar')
                    ->date('d/m/Y')
                    ->sortable(),
                TextColumn::make('nama_lengkap')
                    ->label('Nama')
                    ->searchable(),
                TextColumn::make('program_pendidikan')
                    ->label('Program'),
                TextColumn::make('user.name')
                    ->label('Wali Santri'),
                TextColumn::make('status')
                    ->label('Status')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'Pendaftar Baru' => 'gray',
                        'Perlu Verifikasi' => 'warning',
                        'Lolos Administrasi' => 'success',
                        'Ditolak' => 'danger',
                        'Butuh Revisi' => 'info',
                        'Lolos Seleksi' => 'primary',
                        'Selesai' => 'success',
                        default => 'gray',
                    }),
            ]);
    }
}
