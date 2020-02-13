@extends('layouts.app', ['activePage' => 'setting-management', 'titlePage' => __('setting Management')])

@section('content')
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
            <div class="card">
              <div class="card-header card-header-primary">
                <h4 class="card-title ">{{ __('settings') }}</h4>
                <p class="card-category"> {{ __('Here you can manage settings') }}</p>
              </div>
              <div class="card-body">
                @if (session('status'))
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="alert alert-success">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                          <i class="material-icons">close</i>
                        </button>
                        <span>{{ session('status') }}</span>
                      </div>
                    </div>
                  </div>
                @endif
                <div class="row">
                  <div class="col-12 text-right">
                    <a href="{{ route('settings.create') }}" class="btn btn-sm btn-primary">{{ __('Add Settings') }}</a>
                  </div>
                </div>
                <div class="table-responsive">
                  <table class="table">
                    <thead class=" text-primary">
                      <th>
                        {{ __('ID') }}
                    </th>
                    <th>
                      {{ __('Name') }}
                  </th>
                      <th>
                          {{ __('Domain Url ') }}
                      </th>
                      <th>
                        {{ __('Vast | Vapid url') }}
                      </th>
                      <th>
                        {{ __('Ad type') }}
                      </th>
                      <th>
                        {{ __('Video player formats') }}
                      </th>
                      <th>
                        {{ __('Creation date') }}
                      </th>
                      <th class="text-right">
                        {{ __('Actions') }}
                      </th>
                    </thead>
                    <tbody>
                      @foreach($settings as $setting)
                        <tr>
                          <td>
                            {{ $setting->id }}
                          </td>
                          <td>
                            {{ $setting->name }}
                          </td>
                          <td>
                            {{ $setting->domain_url }}
                          </td>
                          <td>
                            <textarea>{{ $setting->tag_url}}</textarea>
                          </td>
                          <td>
                            {{ $setting->ad_type}}
                          </td>
                          <td>
                            {{ $setting->video_format}}
                          </td>
                          <td>
                            {{ $setting->created_at->format('Y-m-d') }}
                          </td>
                          <td class="td-actions text-right">
                            @if ($setting->id != auth()->id())
                              <form action="{{ route('settings.destroy', $setting->id) }}" method="post">
                                  @csrf
                                  @method('delete')
                              
                                  <a rel="tooltip" class="btn btn-success btn-link" href="{{ route('settings.edit', $setting->id) }}" data-original-title="" title="">
                                    <i class="material-icons">edit</i>
                                    <div class="ripple-container"></div>
                                  </a>
                                  <button type="button" class="btn btn-danger btn-link" data-original-title="" title="" onclick="confirm('{{ __("Are you sure you want to delete this setting?") }}') ? this.parentElement.submit() : ''">
                                      <i class="material-icons">close</i>
                                      <div class="ripple-container"></div>
                                  </button>
                              </form>
                            @else
                              <a rel="tooltip" class="btn btn-success btn-link" href="{{ route('settings.edit', $setting->id) }}" data-original-title="" title="">
                                <i class="material-icons">edit</i>
                                <div class="ripple-container"></div>
                              </a>
                            @endif
                          </td>
                        </tr>
                      @endforeach
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
@endsection