Rails.application.routes.draw do
  resources :advertisements
  resources :users
  resources :todos
  resources :categories

  post "/auth/login", to: "authentication#login"
  get "/auth/logged_in", to: "authentication#logged_in"
  delete "/auth/logout", to: "authentication#logout"
end
