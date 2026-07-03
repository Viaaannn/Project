<?php

namespace App\Filament\Resources\Achievements;

use App\Filament\Resources\Achievements\Pages\ManageAchievements;
use App\Models\Achievement;
use BackedEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Actions\ForceDeleteAction;
use Filament\Actions\ForceDeleteBulkAction;
use Filament\Actions\RestoreAction;
use Filament\Actions\RestoreBulkAction;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Schemas\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Filters\TrashedFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class AchievementResource extends Resource
{
    protected static ?string $model = Achievement::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedTrophy;

    protected static ?string $label = 'Prestasi';
    protected static ?string $pluralLabel = 'Prestasi';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Informasi Prestasi')
                    ->columns(2)
                    ->schema([
                        TextInput::make('judul')
                            ->label('Judul')
                            ->required()
                            ->maxLength(255),
                        TextInput::make('slug')
                            ->label('Slug')
                            ->unique(ignoreRecord: true)
                            ->maxLength(255),
                        RichEditor::make('deskripsi')
                            ->label('Deskripsi')
                            ->columnSpanFull(),
                        Select::make('tingkat')
                            ->label('Tingkat')
                            ->options([
                                'Sekolah' => 'Sekolah',
                                'Kecamatan' => 'Kecamatan',
                                'Kabupaten/Kota' => 'Kabupaten/Kota',
                                'Provinsi' => 'Provinsi',
                                'Nasional' => 'Nasional',
                                'Internasional' => 'Internasional',
                            ]),
                        Select::make('kategori')
                            ->label('Kategori')
                            ->options([
                                'Akademik' => 'Akademik',
                                'Non-Akademik' => 'Non-Akademik',
                                'Seni' => 'Seni',
                                'Olahraga' => 'Olahraga',
                                'Lainnya' => 'Lainnya',
                            ]),
                        TextInput::make('pencapaian')
                            ->label('Pencapaian')
                            ->maxLength(255),
                        DatePicker::make('tanggal')
                            ->label('Tanggal'),
                        TextInput::make('penyelenggara')
                            ->label('Penyelenggara')
                            ->maxLength(255),
                        FileUpload::make('featured_image')
                            ->label('Gambar')
                            ->image()
                            ->directory('achievements'),
                        Toggle::make('is_active')
                            ->label('Aktif'),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('judul')
                    ->label('Judul')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('tingkat')
                    ->label('Tingkat')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'Sekolah' => 'gray',
                        'Kecamatan' => 'info',
                        'Kabupaten/Kota' => 'primary',
                        'Provinsi' => 'warning',
                        'Nasional' => 'success',
                        'Internasional' => 'danger',
                        default => 'gray',
                    }),
                TextColumn::make('kategori')
                    ->label('Kategori'),
                TextColumn::make('pencapaian')
                    ->label('Pencapaian'),
                TextColumn::make('tanggal')
                    ->label('Tanggal')
                    ->date()
                    ->sortable(),
                ImageColumn::make('featured_image')
                    ->label('Gambar')
                    ->circular(),
                TextColumn::make('is_active')
                    ->label('Status')
                    ->badge()
                    ->formatStateUsing(fn ($state) => $state ? 'Aktif' : 'Nonaktif')
                    ->color(fn ($state): string => $state ? 'success' : 'gray'),
            ])
            ->defaultSort('tanggal', 'desc')
            ->filters([
                SelectFilter::make('tingkat')
                    ->label('Tingkat')
                    ->options([
                        'Sekolah' => 'Sekolah',
                        'Kecamatan' => 'Kecamatan',
                        'Kabupaten/Kota' => 'Kabupaten/Kota',
                        'Provinsi' => 'Provinsi',
                        'Nasional' => 'Nasional',
                        'Internasional' => 'Internasional',
                    ]),
                SelectFilter::make('kategori')
                    ->label('Kategori')
                    ->options([
                        'Akademik' => 'Akademik',
                        'Non-Akademik' => 'Non-Akademik',
                        'Seni' => 'Seni',
                        'Olahraga' => 'Olahraga',
                        'Lainnya' => 'Lainnya',
                    ]),
                TrashedFilter::make(),
            ])
            ->recordActions([
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
            'index' => ManageAchievements::route('/'),
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


