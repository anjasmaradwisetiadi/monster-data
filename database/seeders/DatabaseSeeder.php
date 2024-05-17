<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Server;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Anjasmara Dwi Setiadi',
            'email'=> 'anjasmara@gmail.com',
            'password'=> bcrypt('anjasmara'),
            'phone'=> '08123456723',
        ]);

        User::create([
            'name' => 'Mylalovic',
            'email'=> 'mylalovicflorensi@gmail.com',
            'password'=> bcrypt('mylalovicflorensi'),
            'phone'=> '08123456723',
        ]);

        User::create([
            'name' => 'Ihdi Ulhaq',
            'email'=> 'ihdiulhaq@gmail.com',
            'password'=> bcrypt('ihdiulhaq'),
            'phone'=> '08123456723',
        ]);

        Server::create([
            'schedule_name' => 'Postgres Backup 1',
            'user_id'=> 1,
            'backup_server'=> 'Server: n1 (11.12.1.2)',
            'backup_method'=> 'full',
            'backup_type'=> 'file',
            'enable_pitr'=> true,
            'backup_database_per_file'=> true,
            'storage_name'=> 'local storage',
            'storage_directory'=> 'public',
            'retention_policy_type'=> 'week',
            'backup_name'=> 'PC - XXXX',
            'use_compression'=> true,
            'use_encryption'=> true,
            'backup_schedule'=> 'daily'
        ]);

        Server::create([
            'schedule_name' => 'Postgres Backup 2',
            'user_id'=> 1,
            'backup_server'=> 'Server: n1 (11.12.1.2)',
            'backup_method'=> 'full',
            'backup_type'=> 'file',
            'enable_pitr'=> true,
            'backup_database_per_file'=> true,
            'storage_name'=> 'local storage',
            'storage_directory'=> 'public',
            'retention_policy_type'=> 'week',
            'backup_name'=> 'PC - XXXX',
            'use_compression'=> true,
            'use_encryption'=> true,
            'backup_schedule'=> 'daily'
        ]);

        Server::create([
            'schedule_name' => 'Postgres Backup 3',
            'user_id'=> 2,
            'backup_server'=> 'Server: n1 (11.12.1.2)',
            'backup_method'=> 'full',
            'backup_type'=> 'file',
            'enable_pitr'=> true,
            'backup_database_per_file'=> true,
            'storage_name'=> 'local storage',
            'storage_directory'=> 'public',
            'retention_policy_type'=> 'week',
            'backup_name'=> 'PC - XXXX',
            'use_compression'=> true,
            'use_encryption'=> true,
            'backup_schedule'=> 'daily'
        ]);

        Server::create([
            'schedule_name' => 'Postgres Backup 4',
            'user_id'=> 2,
            'backup_server'=> 'Server: n1 (11.12.1.2)',
            'backup_method'=> 'full',
            'backup_type'=> 'file',
            'enable_pitr'=> true,
            'backup_database_per_file'=> true,
            'storage_name'=> 'local storage',
            'storage_directory'=> 'public',
            'retention_policy_type'=> 'week',
            'backup_name'=> 'PC - XXXX',
            'use_compression'=> true,
            'use_encryption'=> true,
            'backup_schedule'=> 'daily'
        ]);
    }
}
