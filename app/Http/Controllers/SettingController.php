<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Setting;
use App\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;


class SettingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $settings = Setting::all();
        $user_id = Auth()->user()->id;
        $user  = User::find($user_id);

        if($user->is_admin == 1)
        {
            return view('pages.settings.index', compact('settings'));
        }else{

            return view('pages.settings.index', compact('settings'))->with('settings', $user->settings);
        }

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $setting = Setting::all();
        return view('pages.settings.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $setting = new Setting;
        
        $path = "pages/settings/";

        $setting ->name =  $request->input('name');
        $setting ->domain_url =  $request->input('domain_url');
        $setting ->tag_url =  $request->input('tag_url');
        $setting ->ad_type =  $request->input('ad_type');
        $setting ->video_format =  $request->input('video_format');
        $setting ->user_id =  Auth()->user()->id;
        $setting ->code_id = Str::random(9);
        $setting ->code_url =$path.$setting->code_id.".js";

        $setting->save();
     
        return redirect("/settings/{$setting->id}")->with("sucess", "data saved");

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $settings = Setting::find($id);
                  
         return view('pages.settings.show', compact('settings'));
    }

    /**
     * generate jscode
     * 
     */

     public function code($id, $code_id)
     {   
         $settings = Setting::find($id);
         $ad_type= $settings->ad_type;
         $domain_url= $settings->domain_url;
         $video_format= $settings->video_format;
         $tag_url= $settings->tag_url;
         $code_id= $settings->code_id;
         $name= $settings->name;
         
         $path = resource_path('views/pages/settings/player/js/application.js');
         $autoplay = "true";

        $templatefile = file_get_contents($path);
        
        $put_content_path =resource_path('views/pages/settings/codes/');
        $replacedfile = str_replace("[autoplay]", $autoplay, $templatefile);
        $replacedfile = str_replace("[codeid]", $code_id, $replacedfile);
        $replacedfile = str_replace("[adtype]", $ad_type, $replacedfile);
        $replacedfile = str_replace("[videoformat]", $video_format, $replacedfile);
        $replacedfile = str_replace("[domainurl]", $domain_url, $replacedfile);
        $replacedfile = str_replace("[tagurl]", $tag_url, $replacedfile);

       file_put_contents($put_content_path .$code_id .".js", $replacedfile );

       $path = "pages/settings/";
    
       $code_url =$path.$code_id.".js";
    
         return view('pages.settings.code', compact('settings'));
         
     }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $settings = Setting::find($id);

        return view('pages.settings.edit', compact('settings'));
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $settings = Setting::find($id);
        $settings->name = $request->get('name');
        $settings->domain_url = $request->get('domain_url');
        $settings->tag_url = $request->get('tag_url');
        $settings->ad_type = $request->get('ad_type');
        $settings->video_format = $request->get('video_format');
        $settings->save();

        return redirect("/settings")->with("success", "Data updated");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $settings = Setting::find($id);

        $settings->delete();

        return redirect("/settings")->with("sucess", "data updated");
    }
}
