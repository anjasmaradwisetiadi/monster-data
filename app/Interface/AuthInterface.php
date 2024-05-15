<?php 
namespace App\Interface;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Contracts\Pagination\Paginator;

interface AuthInterface {
    public function AuthListRepositories():Paginator;
    public function createAuthRepositories(Request $request): User;
    public function AuthDetailRepositories(string $id):  User;
    public function updateAuthRepositories(Request $request, string $id): bool;
    public function destroyAuthRepositories(string $id) :bool;
}

?>