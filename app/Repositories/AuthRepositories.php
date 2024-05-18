<?php 
namespace App\Repositories;

use App\Models\User;
use Illuminate\Http\Request;
use App\Interface\AuthInterface;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Contracts\Pagination\Paginator;

class AuthRepositories implements AuthInterface {
    public function authenticateLoginRepositories(): Array|null {
        $user = Auth::user();
        return $success = [
            'name' => $user->name,
            'email' => $user->email,
            'phone' => $user->phone,
            'token' => $user->createToken('auth_token')->plainTextToken,
        ];
    }
    public function authenticateRegisterRepositories(Request $request): Array|null{
        $dataRegistered = [
            'name' => $request->input('name'),
            'email'=> $request->input('email'),
            'phone' => $request->input('phone'),
            'password'=> $request->input('password'),
        ]; 
        $dataRegistered['password'] = Hash::make($dataRegistered['password']);
        $user = User::create($dataRegistered); 
        return $success = [
            'name' => $user->name,
            'email' => $user->email,
            'phone' => $user->phone,
            'token' => $user->createToken('auth_token')->plainTextToken,
        ];
    }
    public function logoutRepositories(Request $request):  object|null{
        $user = User::where('email', $request->input('email'))->first();
        return $user;
    }
}

?>