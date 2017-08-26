Rails.application.routes.draw do
  get 'home', to: 'pages#home'
  get 'about', to: 'pages#home'
  get 'game', to: 'pages#home'
  root to: 'pages#home'

  get 'oops', to: redirect('/')
  get 'game/start', to: redirect('/game')
  get 'game/final', to: redirect('/game')
  get 'game/round/:roundid', to: redirect('/game')
  get 'game/round/:roundid/turn/:turnid', to: redirect('/game')
  get 'game/round/:roundid/turn/:turnid/final', to: redirect('/game')
  get 'game/round/:roundid/turn/:turnid/action', to: redirect('/game')
  get 'game/round/:roundid/final', to: redirect('/game')


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
