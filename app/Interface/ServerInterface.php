<?php 
namespace App\Interface;

interface ServerInterface{
    public function serverListRepositories():Paginator;
    public function createServerRepositories(Request $request): Server;
    public function serverDetailRepositories(string $id):  Server;
    public function updateServerRepositories(Request $request, string $id): bool; 
    public function destroyServerRepositories(string $id) :bool;
}
?>