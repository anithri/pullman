class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
      t.string :name
      t.integer :author_id, array: true, default: []
      t.string :genres, array: true, default: []
      t.string :mechanics, array: true, default: []
      t.integer :rating
      t.text :description

      t.timestamps
    end
  end
end
