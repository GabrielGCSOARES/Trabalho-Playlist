<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Musica;

class MusicaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Musica::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try{
           Musica::create($request->all());
        }catch(\Exception $e){
            return response()->json([
                'success'=>false,
                'error'=>$e->getMessage()
            ],500);
        }
         
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Musica::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {    
         try{
            $musica = Musica::findOrFail($id);
            $musica->update($request->all());
        }catch(\Exception $e){
            return response()->json([
                'success'=>false,
                'error'=>$e->getMessage()
            ],500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Musica::destroy($id);
    }
}
