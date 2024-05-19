<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Traits\ResponseTrait;
use Illuminate\Support\Facades\Auth;
use App\Repositories\ServerRepositories;
use Illuminate\Support\Facades\Validator;

class ServerController extends Controller
{
    use ResponseTrait;

    public $serverRepositories;
    function __construct(ServerRepositories $serverRepositories){
        $this->serverRepositories = $serverRepositories;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try{
            $results = $this->serverRepositories->serverListRepositories();
            $message = 'Server get Successfull !!!';
            return $this->responseSuccess($results, $message);
        } catch(\Throwable $error){
            $message = "Data Not Found !!!";
            $error = 'Bad Request !!!';
            $code = 400;
            return $this->responseFail($message, $error, $code);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {   
        try{
            $validationResult = $this->validation($request, 'create');
            if($validationResult->fails()){
                $message = $validationResult->errors();
                $error = 'Wrong Validation';
                $code = 400;
    
                return $this->responseFail($message, $error, $code);
            } else {
                $result = $this->serverRepositories->createServerRepositories($request);
                $message = 'Server create successfull !!!';
                return $this->responseSuccess($result, $message);
            }  
        } catch(\Throwable $error) {
            $message = "Unsuccessfull create data  !!!";
            $error = 'Bad Request !!!';
            $code = 400;
            return $this->responseFail($message, $error, $code);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $result = $this->serverRepositories->serverDetailRepositories($id);
            $message = 'Server get successfull !!!';
            return $this->responseSuccess($result, $message);
        } catch(\Throwable $error) {
            $message = "Data Not Found !!!";
            $error = 'Bad Request !!!';
            $code = 400;
            return $this->responseFail($message, $error, $code);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        try {
            $result = $this->serverRepositories->serverDetailRepositories($id);
            $message = 'Server get successfull !!!';
            return $this->responseSuccess($result, $message);
        } catch(\Throwable $error) {
            $message = "Data Not Found !!!";
            $error = 'Bad Request !!!';
            $code = 400;
            return $this->responseFail($message, $error, $code);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try{
            $validationResult = $this->validation($request, 'edit');
            if($validationResult->fails()){
                $message = $validationResult->errors();
                $error = 'Wrong Validation';
                $code = 400;
    
                return $this->responseFail($message, $error, $code);
            } else {
                $result = $this->serverRepositories->updateServerRepositories($request, $id);
                $message = 'Server update successfull !!!';
                return $this->responseSuccess($result, $message);
            }  
        } catch(\Throwable $error) {
            $message = "Unsuccessfull edit data  !!!";
            $error = 'Bad Request !!!';
            $code = 400;
            return $this->responseFail($message, $error, $code);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $data =$this->shoppingCartRepositories->destroyShoppingCartRepositories($id);
            $result = 'Shopping Cart berhasil didelete !!!';
            $message = 'Shopping Cart berhasil didelete !!!';
            return $this->responseSuccess($result, $message);
        } catch  (\Throwable $error) {
            $message = "Data tidak ditemukan !!!";
            $error = 'Bad Request !!!';
            $code = 400;
            return $this->responseFail($message, $error, $code);
        }
    }

    public function validation($request, $from){
        $rules =[
            'backup_server'=> 'required',
            'backup_method'=> 'required',
            'backup_type'=> 'required',
            'storage_name'=> 'required',
            'storage_directory'=> 'required',
            'retention_policy_type'=>'required',
            'backup_name'=> 'required',
            'backup_schedule'=> 'required'
        ];

        $messages =[
            'backup_server.required'=> 'Please fill backup server',
            'backup_method.required'=> 'Please fill backup method',
            'backup_type.required'=> 'Please fill backup type',
            'storage_name.required'=> 'Please fill storage directory',
            'storage_directory.required'=> 'Please fill storage directory',
            'retention_policy_type.required'=> 'Please fill retention policy type',
            'backup_name.required'=> 'Please fill backup name',
            'backup_schedule.required'=> 'Please fill backup schedule',
        ];

        if($from === 'create'){
            $rules['schedule_name'] = 'required|unique:servers';
            $messages['schedule_name.required'] = 'Please fill schedule name';
            $messages['schedule_name.unique'] = 'Schedule name has been record, change another name';

        } 
        $validator = Validator::make($request->all(), $rules, $messages);
        return $validator;
    }
}
