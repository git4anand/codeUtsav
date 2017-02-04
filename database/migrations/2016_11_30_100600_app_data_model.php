<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AppDataModel extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // PROMOCODE //

        Schema::create('promo_codes', function (Blueprint $table) {
            $table->increments('id');
            $table->string('code')->unique()->comment('ye hai disease name');
            $table->timestamps();
        });  
    }     
}
