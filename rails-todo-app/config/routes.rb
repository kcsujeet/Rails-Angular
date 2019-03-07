Rails.application.routes.draw do
  resources :todos
  resources :users, param: :_username

  post '/auth/login', to: 'authentication#login'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
