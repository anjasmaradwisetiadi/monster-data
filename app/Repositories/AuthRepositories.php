<?php 
namespace App\Repositories;

use App\Interface\AuthInterface;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Contracts\Pagination\Paginator;

    class AuthRepositories implements AuthInterface {
        public function administatorListRepositories():Paginator {

        }
        public function createAdministatorRepositories(Request $request): User{

        }
        public function administatorDetailRepositories(string $id):  User{

        }
        public function updateAdministatorRepositories(Request $request, string $id): bool {

        }
        public function destroyAdministatorRepositories(string $id) :bool{

        }
    }

?>