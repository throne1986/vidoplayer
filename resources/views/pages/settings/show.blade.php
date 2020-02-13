@extends('layouts.app', ['activePage' => 'setting-management', 'titlePage' => __('Your Settings Inforamtion')])

@section('content')
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
            <div class="card">
              <div class="card-header card-header-primary">
                <h4 class="card-title ">{{ __('Settings Information') }}</h4>
                <p class="card-category"> {{ __('Here you can Generate Your Unique Code') }}</p>
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
                    <a style="color:white" id="code" class="btn btn-sm btn-primary">{{ __('Generate Code') }}</a>
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
                    
                        <tr>
                          <td>
                            {{ $settings->id }}
                          </td>
                          <td>
                            {{ $settings->name }}
                          </td>
                          <td>
                            {{ $settings->domain_url }}
                          </td>
                          <td>
                            <textarea>{{ $settings->tag_url}}</textarea>
                          </td>
                          <td>
                            {{ $settings->ad_type}}
                          </td>
                          <td>
                            {{ $settings->video_format}}
                          </td>
                          <td>
                            {{ $settings->created_at->format('Y-m-d') }}
                          </td>
                          <td class="td-actions text-right">
                            @if ($settings->id != auth()->id())
                              <form action="{{ route('settings.destroy', $settings->id) }}" method="post">
                                  @csrf
                                  @method('delete')
                              
                                  <a rel="tooltip" class="btn btn-success btn-link" href="{{ route('settings.edit', $settings->id) }}" data-original-title="" title="">
                                    <i class="material-icons">edit</i>
                                    <div class="ripple-container"></div>
                                  </a>
                                  <button type="button" class="btn btn-danger btn-link" data-original-title="" title="" onclick="confirm('{{ __("Are you sure you want to delete this setting?") }}') ? this.parentElement.submit() : ''">
                                      <i class="material-icons">close</i>
                                      <div class="ripple-container"></div>
                                  </button>
                              </form>
                            @else
                              <a rel="tooltip" class="btn btn-success btn-link" href="{{ route('settings.edit', $settings->id) }}" data-original-title="" title="">
                                <i class="material-icons">edit</i>
                                <div class="ripple-container"></div>
                              </a>
                            @endif
                          </td>
                        </tr>
            
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>

  <script>

       var codeGenerateID = document.getElementById('code');
       codeGenerateID.addEventListener('click', function(){
          alert('You clicked something');
            const ws = new WebSocket('ws://localhost:9898/');

              ws.onopen = function() {
                  console.log('WebSocket Client Connected');
                  ws.send('npm run build');
              };

              ws.onmessage = function(e) {
                console.log("Received: '" + e.data + "'");
              };
       })

  </script>
@endsection