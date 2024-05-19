<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Traits\ResponseTrait;
use Illuminate\Support\Facades\Auth;
use App\Repositories\AuthRepositories;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    use ResponseTrait;

    public $authRepositories;
    function __construct(AuthRepositories $authRepositories){
        $this->authRepositories = $authRepositories;
    }

    public function login(Request $request){
        $validationResult = $this->validation($request, 'login');
        if($validationResult->fails()){
            $message = $validationResult->errors();
            $error = 'Wrong Validation';
            $code = 400;

            return $this->responseFail($validationResult->errors(), $error, $code);
        } else{
            $dataUserLoginEmail = [
                'email'=>$request->input('email'),
                'password'=>$request->input('password')
            ];
            if(Auth::attempt($dataUserLoginEmail)){
                // call with inject from repo file
                $success = $this->authRepositories->authenticateLoginRepositories();
                $message = 'User Successfull login !!!';
                return $this->responseSuccess($success, $message);
            } else {
                $message = 'Incorrect email or username and password, check again !!!';
                $error = 'Incorrect email or username and password, check again !!!';
                $code = 401;
                return $this->responseFail($message, $error, $code);
            }
        }
    }

    public function register(Request $request){
        $validationResult = $this->validation($request, 'register');

        $validationResult->after(function ($validationResult) use ($request){
            $password = $request->input('password');
            $passwordConfirm = $request->input('confirm_password');

            $checkStringContain = ($password === $passwordConfirm);
            // this code add validation manual for conatin string or not in tag html contain
            if(!$checkStringContain){
                $validationResult->errors()->add(
                    'confirm_password', 'Confirm password not same with password'
                );
            }
        });

        if($validationResult->fails()){
            $message = $validationResult->errors();
            $error = 'Wrong Validation';
            $code = 400;

            return $this->responseFail($message, $error, $code);
        } else{
            $success = $this->authRepositories->authenticateRegisterRepositories($request);
            $message = 'User successfull saved !!!';

            return $this->responseSuccess($success, $message);
        }
    }

    public function logout(Request $request){
        $user = $this->authRepositories->logoutRepositories($request);

        if($user){
            $user->tokens()->delete();
            Auth::logout();

            $message = 'User has successfully logged out !!!';

            return $this->responseSuccess($user, $message);
        } else {
            $message = 'User email not found !!!';
            $error = 'User email not found !!!';
            $code = 401;

            return $this->responseFail($message, $error, $code);
        }

    }

    public function validation($request, $from){
        if($from === 'login'){
            $rules =[
                'email'=> 'required|email',
                'password'=> 'required|min:8|max:16',
            ];
    
            $messages =[
                'email.required'=> 'Please fill email',
                'email.email'=> 'Format email wrong',
                'password.required'=> 'Please fill password',
                'password.min'=> 'Password must be at least 8 characters',
                'password.max'=> 'Password must be maximal 16 characters',
            ];

        } else {
            $rules =[
                'name'=> 'required|max:256',
                'email'=> 'required|email',
                'phone'=> 'max:15',
                'password'=> 'required|min:8|max:16',
            ];
    
            $messages =[
                'name.required'=>'Please fill full name',
                'name.max'=>'Full name must be at maximal 256 characters',
                'email.required'=> 'Please fill email',
                'email.email'=> 'Format email wrong',
                'phone.max'=> 'Phone number must be maximal 15 characters',
                'password.required'=> 'Please fill password',
                'password.min'=> 'Password must be at least 8 characters',
                'password.max'=> 'Password must be maximal 16 characters',
            ];
        }
        $validator = Validator::make($request->all(), $rules, $messages);
        return $validator;
    }
}
