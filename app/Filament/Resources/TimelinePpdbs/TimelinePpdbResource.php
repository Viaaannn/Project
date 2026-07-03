<?php

namespace App\Filament\Resources\TimelinePpdbs;

use App\Filament\Resources\TimelinePpdbs\Pages\ManageTimelinePpdbs;
use App\Models\TimelinePpdb;
use BackedEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\DatePicker;
use Filament\Schemas\Components\Section;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class TimelinePpdbResource extends Resource
{
    protected static ?string $model = TimelinePpdb::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedClock;

    protected static ?string $label = 'Timeline PPDB';
    protected static ?string $pluralLabel = 'Timeline PPDB';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Informasi Timeline')
                    ->columns(2)
                    ->schema([
                        TextInput::make('kegiatan')
                            ->label('Kegiatan')
                            ->required()
                            ->maxLength(255),
                        TextInput::make('slug')
                            ->label('Slug')
                            ->unique(ignoreRecord: true)
                            ->maxLength(255),
                        Textarea::make('deskripsi')
                            ->label('Deskripsi')
                            ->columnSpanFull(),
                        DatePicker::make('tanggal_mulai')
                            ->label('Tanggal Mulai'),
                        DatePicker::make('tanggal_selesai')
                            ->label('Tanggal Selesai'),
                        TextInput::make('urutan')
                            ->label('Urutan')
                            ->numeric()
                            ->default(0),
                        Toggle::make('is_active')
                            ->label('Aktif'),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('kegiatan')
                    ->label('Kegiatan')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('tanggal_mulai')
                    ->label('Tanggal Mulai')
                    ->date()
                    ->sortable(),
                TextColumn::make('tanggal_selesai')
                    ->label('Tanggal Selesai')
                    ->date()
                    ->sortable(),
                TextColumn::make('is_active')
                    ->label('Status')
                    ->badge()
                    ->formatStateUsing(fn ($state) => $state ? 'Aktif' : 'Nonaktif')
                    ->color(fn ($state): string => $state ? 'success' : 'gray'),
                TextColumn::make('urutan')
                    ->label('Urutan')
                    ->sortable(),
            ])
            ->defaultSort('urutan')
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => ManageTimelinePpdbs::route('/'),
        ];
    }
}


