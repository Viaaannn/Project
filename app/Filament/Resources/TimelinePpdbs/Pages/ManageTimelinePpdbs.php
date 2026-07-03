<?php

namespace App\Filament\Resources\TimelinePpdbs\Pages;

use App\Filament\Resources\TimelinePpdbs\TimelinePpdbResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ManageRecords;

class ManageTimelinePpdbs extends ManageRecords
{
    protected static string $resource = TimelinePpdbResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
