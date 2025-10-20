<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Musica extends Model
{
    public $timestamps = false;
    protected $fillable = ['nome','duracao','compositor','estilo'];
}
