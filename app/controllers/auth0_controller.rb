class Auth0Controller < ApplicationController
  def callback
    # OmniAuth stores the information returned from Auth0 and the IdP in request.env['omniauth.auth'].
    # In this code, you will pull the raw_info supplied from the id_token and assign it to the session.
    # Refer to https://github.com/auth0/omniauth-auth0/blob/master/EXAMPLES.md#example-of-the-resulting-authentication-hash for complete information on 'omniauth.auth' contents.
    auth_info = request.env['omniauth.auth']
    session[:userinfo] = auth_info['extra']['raw_info']

    # Redirect to the URL you want after successful auth
    redirect_to dashboard_path
  end

  def failure
    # Handles failed authentication -- Show a failure page (you can also handle with a redirect)
    @error_msg = request.params['message']
  end

  def logout
    # you will finish this in a later step
    session[:userinfo] = nil
    url = URI::HTTPS.build(
      host: AUTH0_CONFIG['auth0_domain'], path: '/v2/logout', query: {
         client_id: AUTH0_CONFIG['auth0_client_id'], returnTo: root_url
      }.to_query
    ).to_s
    redirect_to url, allow_other_host: true, status: :see_other
  end
end
