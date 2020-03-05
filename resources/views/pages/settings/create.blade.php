@extends('layouts.app', ['activePage' => 'Generate-code', 'titlePage' => __('Generate Code')])

@section('content')
  <div class="content">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <form method="post" action="{{ route('settings.store') }}" autocomplete="off" class="form-horizontal">
            @csrf
            @method('post')


            <div class="card ">
              <div class="card-header card-header-primary">
                <h4 class="card-title">{{ __('Fill the form below') }}</h4>
                <p class="card-category"></p>
              </div>
              <div class="card-body ">
                <div class="row">
                  <div class="col-md-12 text-right">
                      <a href="{{ route('settings.index') }}" class="btn btn-sm btn-primary">{{ __('Back to list') }}</a>
                  </div>
                </div>
                <div class="row">
                  <label class="col-sm-2 col-form-label">{{ __('Company Name') }}</label>
                  <div class="col-sm-7">
                    <div class="form-group{{ $errors->has('name') ? ' has-danger' : '' }}">
                      <input class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name" id="input-name" type="text" placeholder="{{ __('Please provide company name') }}" value="{{ old('name') }}" required="true" aria-required="true"/>
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
                      <input class="form-control{{ $errors->has('domain_url') ? ' is-invalid' : '' }}" name="domain_url" id="input-name" type="url" placeholder="{{ __('Provide your domain url') }}" value="{{ old('domain_url') }}" required="true" aria-required="true"/>
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
                      <input class="form-control{{ $errors->has('tag_url') ? ' is-invalid' : '' }}" name="tag_url" id="input-vast" type="url" placeholder="{{ __('provide vat | vapid tag url') }}" value="{{ old('tag_url') }}" required />
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
                              <option selected>Please select ad type </option>
                              <option>InView </option>
                              <option>InPage </option>
                              <option>Sticky </option>
                              <option>InBanner </option>
                              <option>InApp </option>
                              <option>AdEnabled</option>

                          </select> 
                      </div>
                  </div>
              </div>

              <div class="row">
                <label class="col-sm-2 col-form-label">{{ __('Video Ad Formats') }}</label>
                <div class="col-sm-7">
                    <div class="form-group">
                        <select id="inputFormats" class="form-control" name="video_format">
                            <option selected>Please video player formats</option>
                            <option>OUTSTREAM VIDEO PLAYER</option>
                            <option>INSTREAM VIDEO AD PLAYER</option>
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