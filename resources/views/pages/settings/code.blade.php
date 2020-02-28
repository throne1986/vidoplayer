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
        <span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span>
                 &ltdiv id="videomill-outstream" class="vmwp-v1" &gt
                    (function (w,d,s,o,f,js,fjs) {
                                w['JS-Widget']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
                                js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
                                js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
                            }(window, document, 'script', 'mw', 'http://localhost/widget/dist/widget.c99aafde2cbb7819f90b.js'));
                            mw('init', { 
                                someConfiguration: 448,
                                app_id:12345 
                            });
                    mw('message', 'x');
                  &lt/div&gt
      <span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span></code>  
      </code>
    </pre>
  </div>
@endsection