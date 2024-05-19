<?php 
namespace App\Interface;

use App\Models\Server;
use Illuminate\Http\Request;
use Illuminate\Contracts\Pagination\Paginator;

interface ServerInterface{
    public function serverListRepositories():Paginator;
    public function createServerRepositories(Request $request): Server;
    public function serverDetailRepositories(string $slug):  Server;
    public function updateServerRepositories(Request $request, string $slug): bool; 
    public function destroyServerRepositories(string $slug) :bool;
}
?>