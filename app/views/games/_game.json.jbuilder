json.extract! game, :id, :name, :author_id, :genres, :mechanics, :rating, :description, :created_at, :updated_at
json.url game_url(game, format: :json)
