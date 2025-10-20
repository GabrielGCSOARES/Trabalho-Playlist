<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('musicas', function (Blueprint $table) {
            $table->id();
            $table->string('nome');
            $table->time('duracao');
            $table->string('compositor');
            $table->string('estilo');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('musicas');
    }
};

// INSERT INTO musicas (nome, duracao, compositor, estilo)
// VALUES
// ('Bohemian Rhapsody', '00:05:55', 'Freddie Mercury', 'Rock'),
// ('Garota de Ipanema', '00:03:20', 'Tom Jobim e Vinicius de Moraes', 'Bossa Nova'),
// ('Billie Jean', '00:04:54', 'Michael Jackson', 'Pop'),
// ('Smells Like Teen Spirit', '00:05:01', 'Kurt Cobain', 'Grunge'),
// ('Shape of You', '00:03:53', 'Ed Sheeran', 'Pop');
