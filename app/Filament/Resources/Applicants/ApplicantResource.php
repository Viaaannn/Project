<?php

namespace App\Filament\Resources\Applicants;

use App\Filament\Resources\Applicants\Pages\ManageApplicants;
use App\Models\Applicant;
use App\Models\ApplicantDocument;
use BackedEnum;
use Filament\Actions\Action;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ForceDeleteAction;
use Filament\Actions\ForceDeleteBulkAction;
use Filament\Actions\RestoreAction;
use Filament\Actions\RestoreBulkAction;
use Filament\Forms\Components\DatePicker;
use Filament\Schemas\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TagsInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Notifications\Notification;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Filters\TrashedFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Facades\Storage;

class ApplicantResource extends Resource
{
    protected static ?string $model = Applicant::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedUserGroup;

    protected static ?string $label = 'Pendaftar';
    protected static ?string $pluralLabel = 'Pendaftar';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Data Diri')
                    ->columns(2)
                    ->schema([
                        TextInput::make('nama_lengkap')
                            ->label('Nama Lengkap')
                            ->required()
                            ->maxLength(255),
                        TextInput::make('tempat_lahir')
                            ->label('Tempat Lahir')
                            ->maxLength(255),
                        DatePicker::make('tanggal_lahir')
                            ->label('Tanggal Lahir'),
                        Select::make('jenis_kelamin')
                            ->label('Jenis Kelamin')
                            ->options([
                                'Laki-laki' => 'Laki-laki',
                                'Perempuan' => 'Perempuan',
                            ]),
                        TextInput::make('anak_ke')
                            ->label('Anak Ke-')
                            ->numeric(),
                        TextInput::make('jumlah_saudara')
                            ->label('Jumlah Saudara')
                            ->numeric(),
                        Textarea::make('alamat_lengkap')
                            ->label('Alamat Lengkap')
                            ->columnSpanFull(),
                        TextInput::make('provinsi')
                            ->label('Provinsi')
                            ->maxLength(255),
                        TextInput::make('kota')
                            ->label('Kota')
                            ->maxLength(255),
                        TextInput::make('kecamatan')
                            ->label('Kecamatan')
                            ->maxLength(255),
                        TextInput::make('kelurahan')
                            ->label('Kelurahan')
                            ->maxLength(255),
                        TextInput::make('whatsapp_santri')
                            ->label('WhatsApp Santri')
                            ->tel()
                            ->maxLength(20),
                    ]),
                Section::make('Data Orang Tua')
                    ->columns(2)
                    ->schema([
                        TextInput::make('nama_ayah')
                            ->label('Nama Ayah')
                            ->maxLength(255),
                        TextInput::make('pekerjaan_ayah')
                            ->label('Pekerjaan Ayah')
                            ->maxLength(255),
                        TextInput::make('pendidikan_ayah')
                            ->label('Pendidikan Ayah')
                            ->maxLength(255),
                        TextInput::make('hp_ayah')
                            ->label('No. HP Ayah')
                            ->tel()
                            ->maxLength(20),
                        TextInput::make('nama_ibu')
                            ->label('Nama Ibu')
                            ->maxLength(255),
                        TextInput::make('pekerjaan_ibu')
                            ->label('Pekerjaan Ibu')
                            ->maxLength(255),
                        TextInput::make('pendidikan_ibu')
                            ->label('Pendidikan Ibu')
                            ->maxLength(255),
                        TextInput::make('hp_ibu')
                            ->label('No. HP Ibu')
                            ->tel()
                            ->maxLength(20),
                        Textarea::make('alamat_orang_tua')
                            ->label('Alamat Orang Tua')
                            ->columnSpanFull(),
                    ]),
                Section::make('Data Wali')
                    ->columns(2)
                    ->schema([
                        TextInput::make('nama_wali')
                            ->label('Nama Wali')
                            ->maxLength(255),
                        TextInput::make('hubungan_wali')
                            ->label('Hubungan Wali')
                            ->maxLength(255),
                        TextInput::make('hp_wali')
                            ->label('No. HP Wali')
                            ->tel()
                            ->maxLength(20),
                    ]),
                Section::make('Pilihan Program')
                    ->columns(2)
                    ->schema([
                        Select::make('program_pendidikan')
                            ->label('Program Pendidikan')
                            ->options([
                                'Tahfidz' => 'Tahfidz',
                                'Reguler' => 'Reguler',
                                'Kaderisasi' => 'Kaderisasi',
                            ]),
                        TagsInput::make('program_unggulan')
                            ->label('Program Unggulan'),
                    ]),
                Section::make('Status')
                    ->columns(2)
                    ->schema([
                        Select::make('status')
                            ->label('Status')
                            ->options([
                                'Pendaftar Baru' => 'Pendaftar Baru',
                                'Perlu Verifikasi' => 'Perlu Verifikasi',
                                'Lolos Administrasi' => 'Lolos Administrasi',
                                'Ditolak' => 'Ditolak',
                                'Butuh Revisi' => 'Butuh Revisi',
                                'Lolos Seleksi' => 'Lolos Seleksi',
                                'Selesai' => 'Selesai',
                            ]),
                        Textarea::make('admin_notes')
                            ->label('Catatan Admin')
                            ->columnSpanFull(),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('id')
                    ->label('ID')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('nama_lengkap')
                    ->label('Nama Lengkap')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('user.name')
                    ->label('Akun Pendaftar')
                    ->sortable(),
                TextColumn::make('status')
                    ->label('Status')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'Pendaftar Baru' => 'info',
                        'Perlu Verifikasi' => 'warning',
                        'Lolos Administrasi' => 'success',
                        'Ditolak' => 'danger',
                        'Butuh Revisi' => 'warning',
                        'Lolos Seleksi' => 'primary',
                        'Selesai' => 'gray',
                        default => 'gray',
                    }),
                TextColumn::make('program_pendidikan')
                    ->label('Program Pendidikan'),
                TextColumn::make('whatsapp_santri')
                    ->label('WhatsApp'),
                TextColumn::make('documents_count')
                    ->label('Dokumen')
                    ->counts('documents')
                    ->badge()
                    ->color('success'),
                TextColumn::make('verifiedBy.name')
                    ->label('Diverifikasi Oleh'),
                TextColumn::make('created_at')
                    ->label('Dibuat')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(),
            ])
            ->defaultSort('created_at', 'desc')
            ->filters([
                SelectFilter::make('status')
                    ->label('Status')
                    ->options([
                        'Pendaftar Baru' => 'Pendaftar Baru',
                        'Perlu Verifikasi' => 'Perlu Verifikasi',
                        'Lolos Administrasi' => 'Lolos Administrasi',
                        'Ditolak' => 'Ditolak',
                        'Butuh Revisi' => 'Butuh Revisi',
                        'Lolos Seleksi' => 'Lolos Seleksi',
                        'Selesai' => 'Selesai',
                    ]),
                SelectFilter::make('program_pendidikan')
                    ->label('Program Pendidikan')
                    ->options([
                        'Tahfidz' => 'Tahfidz',
                        'Reguler' => 'Reguler',
                        'Kaderisasi' => 'Kaderisasi',
                    ]),
                TrashedFilter::make(),
            ])
            ->recordActions([
                Action::make('download_zip')
                    ->label('Download ZIP')
                    ->icon(Heroicon::OutlinedArchiveBox)
                    ->color('success')
                    ->action(function (Applicant $record) {
                        if ($record->documents->isEmpty()) {
                            Notification::make()->warning()->title('Tidak ada dokumen')->send();
                            return;
                        }
                        return response()->streamDownload(function () use ($record) {
                            $zip = new \ZipArchive();
                            $zip->open('php://output', \ZipArchive::CREATE);
                            foreach ($record->documents as $doc) {
                                $filePath = Storage::disk('public')->path($doc->stored_path);
                                if (file_exists($filePath)) {
                                    $zip->addFile($filePath, $doc->jenis_dokumen . '_' . $doc->original_name);
                                }
                            }
                            $zip->close();
                        }, 'dokumen_' . $record->id . '.zip');
                    }),
                Action::make('delete_document')
                    ->label('Hapus Dokumen')
                    ->icon(Heroicon::OutlinedTrash)
                    ->color('danger')
                    ->requiresConfirmation()
                    ->form([
                        Select::make('document_id')
                            ->label('Pilih Dokumen')
                            ->options(fn (Applicant $record) => $record->documents->pluck('original_name', 'id'))
                            ->required(),
                    ])
                    ->action(function (array $data, Applicant $record) {
                        if (empty($data['document_id'])) return;
                        $doc = ApplicantDocument::find($data['document_id']);
                        if ($doc && $doc->applicant_id === $record->id) {
                            $doc->delete();
                            Notification::make()->success()->title('Dokumen berhasil dihapus')->send();
                        }
                    }),
                EditAction::make(),
                DeleteAction::make(),
                ForceDeleteAction::make(),
                RestoreAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                    ForceDeleteBulkAction::make(),
                    RestoreBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => ManageApplicants::route('/'),
        ];
    }

    public static function getRecordRouteBindingEloquentQuery(): Builder
    {
        return parent::getRecordRouteBindingEloquentQuery()
            ->withoutGlobalScopes([
                SoftDeletingScope::class,
            ]);
    }
}


