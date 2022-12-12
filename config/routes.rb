Rails.application.routes.draw do
  resources :users
  resources :products, only: [:index, :show, :update, :destroy, :create]
  # route to test your configuration
  post '/signup', to: 'users#create' 
  post '/login', to: 'sessions#create' 
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#show'
end