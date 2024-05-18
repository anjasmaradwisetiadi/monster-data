<?php 
namespace App\Interface;

use Illuminate\Contracts\Pagination\Paginator;


interface ServerBackupInterface{
    public function serverBackupListRepositories():Paginator;
}
?>