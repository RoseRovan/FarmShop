Rails.application.routes.draw do
  resources :products, except: [:show]
  # route to test your configuration
  
end