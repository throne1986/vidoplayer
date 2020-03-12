<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
	return view('welcome');
});


// Route::get('/clear-cache', function() {
//     Artisan::call('cache:clear');
//     return "Cache is cleared";
// });


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home')->middleware('auth');
// Route::resource('settings', "SettingController");
Route::group(['middleware' => 'auth'], function () {
	Route::get('table-list', function () {
		return view('pages.table_list');
	})->name('table');

	// Route::get('code', function () {
	// 	return view('pages.settings.code');
	// })->name('code');

	Route::get('typography', function () {
		return view('pages.typography');
	})->name('typography');

	Route::get('icons', function () {
		return view('pages.icons');
	})->name('icons');

	Route::get('map', function () {
		return view('pages.map');
	})->name('map');

	Route::get('notifications', function () {
		return view('pages.notifications');
	})->name('notifications');

	Route::get('rtl-support', function () {
		return view('pages.language');
	})->name('language');

	Route::get('upgrade', function () {
		return view('pages.upgrade');
	})->name('upgrade');


	Route::get('settings/code/{id}/{code_id}', ['as' => 'settings.code', 'uses' => 'SettingController@code']);
	
	Route::resource('settings', "SettingController");

		Route::get('widget/codes/{filename}', function ($filename){
			$path = storage_path('widget/codes/' . $filename);

				if (!File::exists($path)) {
					abort(404);
				}
			$file = File::get($path);
			$type = File::mimeType($path);
			$response = Response::make($file, 200);
			$response->header("Content-Type", $type);

		return $response;
	});


	Route::get('player/{filename}', function ($filename){
		$path = storage_path('player/' . $filename);

			if (!File::exists($path)) {
				abort(404);
			}
		$file = File::get($path);
		$type = File::mimeType($path);
		$response = Response::make($file, 200);
		$response->header("Content-Type", $type);

	return $response;
});


});

Route::group(['middleware' => ['admin']], function () {
	Route::get('profile', ['as' => 'profile.edit', 'uses' => 'ProfileController@edit']);
	Route::put('profile', ['as' => 'profile.update', 'uses' => 'ProfileController@update']);
	Route::get('user', ['as' => 'user.destroy', 'uses' => 'UserController@destroy']);

});

Route::group(['middleware' => 'auth'], function () {
	Route::resource('user', 'UserController', ['except' => ['show']]);
	Route::get('profile', ['as' => 'profile.edit', 'uses' => 'ProfileController@edit']);
	Route::put('profile', ['as' => 'profile.update', 'uses' => 'ProfileController@update']);
	Route::put('profile/password', ['as' => 'profile.password', 'uses' => 'ProfileController@password']);
});

