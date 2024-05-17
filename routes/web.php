<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [DashboardController::class, 'index']);
Route::get('/login', [DashboardController::class, 'index']);
Route::get('/register', [DashboardController::class, 'index']);
Route::get('/schedule', [DashboardController::class, 'index']);
Route::get('/schedule/{slug}', [DashboardController::class, 'index']);
Route::get('/schedule/create', [DashboardController::class, 'index']);
Route::get('/schedule/{slug}/edit', [DashboardController::class, 'index']);
// need delete example pop up dialog
Route::get('/dialog', [DashboardController::class, 'index']);



