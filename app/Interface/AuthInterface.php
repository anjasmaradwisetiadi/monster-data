<?php 
namespace App\Interface;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Contracts\Pagination\Paginator;

interface AuthInterface {
    public function authenticateLoginRepositories(): Array|null;
    public function authenticateRegisterRepositories(Request $request): Array|null;
    public function logoutRepositories(Request $request):  object|null;
}

?>