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
Route::get('/dashboard', [DashboardController::class, 'index']);
Route::get('/dashboard/{slug}', [DashboardController::class, 'index']);
Route::get('/dashboard/create', [DashboardController::class, 'index']);
Route::get('/dashboard/{slug}/edit', [DashboardController::class, 'index']);
Route::fallback(function(){
    return view('dashboard');
});


