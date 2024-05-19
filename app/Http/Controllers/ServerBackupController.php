<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Traits\ResponseTrait;
use App\Repositories\ServerBackupRepositories;

class ServerBackupController extends Controller
{   
    use ResponseTrait;

    public $serverBackupRepositories;
    function __construct(ServerBackupRepositories $serverBackupRepositories){
        $this->serverBackupRepositories = $serverBackupRepositories;
    }
    
    public function index(){
        try{
            $results = $this->serverBackupRepositories->serverBackupListRepositories();
            $message = 'Server backup get Successfull !!!';
            return $this->responseSuccess($results, $message);
        } catch(\Throwable $error){
            $message = "Data Not Found !!!";
            $error = 'Bad Request !!!';
            $code = 400;
            return $this->responseFail($message, $error, $code);
        }
    }
}
