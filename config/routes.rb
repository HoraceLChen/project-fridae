Rails.application.routes.draw do
  root 'pages#root'
  resource :dashboard

  get 'dashboards/show'
  get '/auth/auth0/callback', to: 'auth0#callback'
  get 'auth0/failure', to: 'auth0#failure'
  get 'auth/logout', to: 'auth0#logout'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get 'chat', to: 'dashboards#chat'
  post 'dashboards_post', to: 'dashboards#show'
  post 'dashboards/gpt', to: 'dashboards#gpt_post'
  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
