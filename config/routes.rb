Rails.application.routes.draw do
  get 'home', to: 'pages#home'
  get 'about', to: 'pages#home'
  get 'game', to: 'pages#home'
  root to: 'pages#home'

  get 'game/start', to: 'pages#home'
  get 'game/final', to: 'pages#home'
  get 'game/round/:roundid', to: 'pages#home'
  get 'game/round/:roundid/turn/:turnid', to: 'pages#home'
  get 'game/round/:roundid/turn/:turnid/final', to: 'pages#home'
  get 'game/round/:roundid/turn/:turnid/action', to: 'pages#home'
  get 'game/round/:roundid/final', to: 'pages#home'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
