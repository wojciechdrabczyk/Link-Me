<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    public function create(Request $request) {
        return inertia('Submit');
    }

    public function store(Request $request) {


    }
}
