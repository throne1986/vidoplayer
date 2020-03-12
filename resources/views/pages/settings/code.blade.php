@extends('layouts.app', ['activePage' => 'setting-management', 'titlePage' => __('Your Settings Inforamtion')])

@section('content')
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
   
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header card-header-primary">
        <h4 class="card-title ">{{ __('Below is your Code') }}</h4>
        <p class="card-category"> {{ __('Please copy the code below and insert into you page') }}</p>
      </div>
    </div>
      <pre><code class="xml">
        <span class="hljs-comment">&lt;!-- Videoplayer Integration Code --&gt;</span>

        &ltdiv id="videomill-<?php echo "$settings->ad_type"; ?>" style="height:0;overflow:hidden;" class="vmwp-v1" &gt
             <span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span>
                    (function (w,d,s,o,f,js,fjs) {
                                w['JS-Widget']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
                                js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
                                js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
                            }(window, document, 'script', 'mw', 'https://player.videomill.co/widget/codes/<?php echo "$settings->code_id"; ?>.js'));
                            mw('init', { 
                                someConfiguration: 448,
                                app_id:12345 
                            });
                    mw('message', 'x');
            <span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>
      &lt/div&gt
      </code>  
      </code>
    </pre>
  </div>
@endsection