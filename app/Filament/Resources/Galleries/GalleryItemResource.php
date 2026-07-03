<?php

namespace App\Filament\Resources\Galleries;

use App\Filament\Resources\Galleries\Pages\ManageGalleryItems;
use App\Models\GalleryItem;
use BackedEnum;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Forms\Components\FileUpload;
use Filament\Schemas\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class GalleryItemResource extends Resource
{
    protected static ?string $model = GalleryItem::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedPhoto;

    protected static ?string $label = 'Item Galeri';
    protected static ?string $pluralLabel = 'Item Galeri';
    protected static ?string $navigationParentItem = 'Galeri';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                Section::make('Detail Item')
                    ->schema([
                        Select::make('gallery_id')
                            ->label('Galeri')
                            ->relationship('gallery', 'title')
                            ->required(),
                        FileUpload::make('file_path')
                            ->label('File')
                            ->image()
                            ->maxSize(5120)
                            ->directory('galleries'),
                        FileUpload::make('thumbnail_path')
                            ->label('Thumbnail')
                            ->image()
                            ->maxSize(2048)
                            ->directory('galleries/thumbnails'),
                        TextInput::make('caption')
                            ->label('Keterangan')
                            ->maxLength(255),
                        TextInput::make('mime_type')
                            ->label('Tipe File')
                            ->maxLength(50),
                        TextInput::make('order')
                            ->label('Urutan')
                            ->numeric()
                            ->default(0),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('file_path')
                    ->label('Preview')
                    ->size(60),
                TextColumn::make('gallery.title')
                    ->label('Galeri')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('caption')
                    ->label('Keterangan')
                    ->limit(40)
                    ->searchable(),
                TextColumn::make('mime_type')
                    ->label('Tipe'),
                TextColumn::make('order')
                    ->label('Urutan')
                    ->sortable(),
                TextColumn::make('created_at')
                    ->label('Dibuat')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(),
            ])
            ->defaultSort('order')
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
            'index' => ManageGalleryItems::route('/'),
        ];
    }
}


