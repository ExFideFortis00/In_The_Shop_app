class CreateAlerts < ActiveRecord::Migration
  def change
    create_table :alerts do |t|
      t.integer :car_id
      t.string :diagnostic_codes
      t.string :repair_status
      t.timestamps
    end
  end
end
