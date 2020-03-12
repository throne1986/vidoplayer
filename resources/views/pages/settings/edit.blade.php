@extends('layouts.app', ['activePage' => 'Generate-code', 'titlePage' => __('Generate Code')])

@section('content')
  <div class="content">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <form method="post" action="{{ route('settings.update', $settings->id) }}" autocomplete="off" class="form-horizontal">
            @csrf
            @method('PATCH') 

            <div class="card ">
              <div class="card-header card-header-primary">
                <h4 class="card-title">{{ __('Edit your setting below') }}</h4>
                <p class="card-category"></p>
              </div>
              <div class="card-body ">
                <div class="row">
                  <div class="col-md-12 text-right">
                  <a href="{{ route('settings.index') }}" class="btn btn-sm btn-primary">{{ __('Back to list') }}</a>
                  </div>
                </div>

                <div class="row">
                  <label class="col-sm-2 col-form-label">{{ __('Name') }}</label>
                  <div class="col-sm-7">
                    <div class="form-group{{ $errors->has('name') ? ' has-danger' : '' }}">
                      <input class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name" id="input-name" type="text" placeholder="{{ __('Name') }}" value="{{ old('name', $settings->name) }}" required="true" aria-required="true"/>
                      @if ($errors->has('name'))
                        <span id="name-error" class="error text-danger" for="input-name">{{ $errors->first('name') }}</span>
                      @endif
                    </div>
                  </div>
                </div>

                <div class="row">
                  <label class="col-sm-2 col-form-label">{{ __('Domain Url') }}</label>
                  <div class="col-sm-7">
                    <div class="form-group{{ $errors->has('domain_url') ? ' has-danger' : '' }}">
                      <input class="form-control{{ $errors->has('domain_url') ? ' is-invalid' : '' }}" name="domain_url" id="input-name" type="url" placeholder="{{ __('Provide your domain url') }}" value="{{ $settings->domain_url }}" required="true" aria-required="true"/>
                      @if ($errors->has('domain_url'))
                        <span id="name-error" class="error text-danger" for="domain_url">{{ $errors->first('domain_url') }}</span>
                      @endif
                    </div>
                  </div>
                </div>
                <div class="row">
                  <label class="col-sm-2 col-form-label">{{ __('Vast | Vpaid Tag') }}</label>
                  <div class="col-sm-7">
                    <div class="form-group{{ $errors->has('tag_url') ? ' has-danger' : '' }}">
                      <input class="form-control{{ $errors->has('tag_url') ? ' is-invalid' : '' }}" name="tag_url" id="input-vast" type="url" placeholder="{{ __('provide vat | vapid tag url') }}" value="{{ $settings->tag_url }}" required />
                      @if ($errors->has('tag_url'))
                        <span id="vast-error" class="error text-danger" for="tag_url">{{ $errors->first('tag_url') }}</span>
                      @endif
                    </div>
                  </div>
                </div>

         

                <div class="row">
                  <label class="col-sm-2 col-form-label">{{ __('Ads Type') }}</label>
                  <div class="col-sm-7">
                      <div class="form-group">
                        <select id="inputStatus" class="form-control" name="ad_type">
                          <option value="InView" @if ($settings->ad_type === 'InView') selected @endif>InView </option> 
                          <option value="InPage" @if ($settings->ad_type === 'InPage') selected @endif>InPage </option> 
                          <option value="Sticky" @if ($settings->ad_type === 'Sticky') selected @endif>Sticky </option> 
                          <option value="InApp" @if ($settings->ad_type === 'InApp') selected @endif>InApp </option> 
                          <option value="AdEnabled" @if ($settings->ad_type === 'AdEnabled') selected @endif>Ad-Enabled </option> 
                      </select>  
                      </div>
                  </div>
              </div>

              <div class="row">
                <label class="col-sm-2 col-form-label">{{ __('Video Ad Formats') }}</label>
                <div class="col-sm-7">
                    <div class="form-group">
                        <select id="inputFormats" class="form-control" name="video_format">

                          <option value="OUTSTREAM " @if ($settings->video_format === 'OUTSTREAM ') selected @endif>OUTSTREAM </option> 
                          <option value="InPage " @if ($settings->ad_type === 'InPage ') selected @endif>InPage </option> 
                        </select>
                    </div>
                </div>
            </div>


              </div>
              <div class="card-footer ml-auto mr-auto">
                <button type="submit" class="btn btn-primary">{{ __('Save') }}</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
@endsection