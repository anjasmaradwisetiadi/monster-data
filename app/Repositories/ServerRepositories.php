<?php 
namespace App\Repositories;

use App\Models\Server;
use Illuminate\Http\Request;
use App\Interface\ServerInterface;
use Illuminate\Contracts\Pagination\Paginator;

class ServerRepositories implements ServerInterface {
    public function serverListRepositories():Paginator {
        return Server::where('user_id','=',auth()->user()->id)->latest()->paginate(1)->withQueryString();
    }
    public function createServerRepositories(Request $request): Server{
        $result = Server::create([
            'schedule_name'=> $request->input('schedule_name'),
            'user_id'=> auth()->user()->id,
            'slug'=> $request->input('slug'),
            'backup_server'=> $request->input('backup_server'),
            'backup_method'=> $request->input('backup_method'),
            'backup_type'=>$request->input('backup_type'),
            'enable_pitr'=>$request->input('enable_pitr'),
            'backup_database_per_file'=>$request->input('backup_database_per_file'),
            'storage_name'=>$request->input('storage_name'),
            'storage_directory'=>$request->input('storage_directory'),
            'retention_policy_type'=>$request->input('retention_policy_type'),
            'backup_name'=>$request->input('backup_name'),
            'use_compression'=>$request->input('use_compression'),
            'use_encryption'=>$request->input('use_encryption'),
            'backup_schedule'=>$request->input('backup_schedule'),
        ]);
        return $result;
        
    }
    public function serverDetailRepositories(string $slug):  Server{
        return Server::where('slug','=', $slug)->first();
    }
    public function updateServerRepositories(Request $request, string $slug): bool {
        return  Server::where('slug','=', $slug)
                ->update([
                    'backup_server'=> $request->input('backup_server'),
                    'backup_method'=> $request->input('backup_method'),
                    'backup_type'=>$request->input('backup_type'),
                    'enable_pitr'=>$request->input('enable_pitr'),
                    'backup_database_per_file'=>$request->input('backup_database_per_file'),
                    'storage_name'=>$request->input('storage_name'),
                    'storage_directory'=>$request->input('storage_directory'),
                    'retention_policy_type'=>$request->input('retention_policy_type'),
                    'backup_name'=>$request->input('backup_name'),
                    'use_compression'=>$request->input('use_compression'),
                    'use_encryption'=>$request->input('use_encryption'),
                    'backup_schedule'=>$request->input('backup_schedule'),
                ]);
    }
    public function destroyServerRepositories(string $slug) :bool{
        $server = Server::where('slug','=', $slug)->first();
        return Server::destroy($server->id);
    }
}
?>