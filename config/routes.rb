Rails.application.routes.draw do
  resources :profiles
  resources :advertisements
  resources :users
  resources :todos
  resources :categories do
    resources :subcategories
  end

  get "/all_advertisements", to: "advertisements#all_advertisements"
  get "/all_subcategories", to: "subcategories#all"
  post "/auth/login", to: "authentication#login"
  get "/auth/logged_in", to: "authentication#logged_in"
  delete "/auth/logout", to: "authentication#logout"
end
