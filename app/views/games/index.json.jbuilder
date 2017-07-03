json.set! :games do
  json.array! @games, partial: 'games/game', as: :game

end
