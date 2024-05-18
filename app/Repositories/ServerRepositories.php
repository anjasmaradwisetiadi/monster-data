<?php 
namespace App\Repositories;

use App\Models\Server;
use App\Interface\ServerInterface;
use Illuminate\Contracts\Pagination\Paginator;

class ServerRepositories implements ServerInterface {
    public function serverListRepositories():Paginator {

    }
    public function createServerRepositories(Request $request): Server{

    }
    public function serverDetailRepositories(string $id):  Server{

    }
    public function updateServerRepositories(Request $request, string $id): bool {

    }
    public function destroyServerRepositories(string $id) :bool{

    }
}
?>