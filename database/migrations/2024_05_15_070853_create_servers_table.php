<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('servers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users');
            $table->string('schedule_name')->unique();
            $table->string('slug');
            $table->string('backup_server');
            $table->enum('backup_method', ['full','incremental','separate']);
            $table->enum('backup_type', ['file', 'image', 'video']);
            $table->boolean('enable_pitr');
            $table->boolean('backup_database_per_file');
            $table->string('storage_name');
            $table->string('storage_directory');
            $table->enum('retention_policy_type', ['day', 'week', 'month']);
            $table->string('backup_name');
            $table->boolean('use_compression');
            $table->boolean('use_encryption');
            $table->enum('backup_schedule', ['hourly', 'daily', 'weekly', 'monthly']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('servers');
    }
}
