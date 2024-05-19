<?php 
namespace App\Repositories;

use App\Models\Server;
use App\Models\ServerBackup;
use App\Interface\ServerBackupInterface;
use Illuminate\Contracts\Pagination\Paginator;

class ServerBackupRepositories implements ServerBackupInterface {
    public function serverBackupListRepositories():Paginator {
        return ServerBackup::latest()->paginate(10)->withQueryString();
    }
}
?>