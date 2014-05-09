class CreateCars < ActiveRecord::Migration
  def change
    create_table :cars do |t|
      t.integer :user_id
      t.string :name 
      t.string :make
      t.string :model
      t.integer :year
      t.integer :starting_milage
      t.string :vin_number
      t.string :image_url
      t.timestamps
    end
  end
end
