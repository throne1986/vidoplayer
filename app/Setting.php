<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use APP\User;

class Setting extends Model
{
    protected $fillable =[
        "name",
        "domain_url",
        "tag_url",
        "ad_type",
        "video_format"
    ];

    public function user(){

        return $this->belongsTo('APP\User');
        
    }
}
