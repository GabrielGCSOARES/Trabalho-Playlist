<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MusicaController;

Route::apiResource('musicas',MusicaController::class);