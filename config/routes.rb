Rails.application.routes.draw do
  resources :products, only: [:index, :show, :update, :destroy, :create]
  # route to test your configuration
  
end