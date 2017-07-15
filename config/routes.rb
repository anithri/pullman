Rails.application.routes.draw do
  get 'home', to: 'pages#home'
  get 'about', to: 'pages#about'
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
