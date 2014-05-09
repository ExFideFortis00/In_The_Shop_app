# == Schema Information
#
# Table name: cars
#
#  id              :integer          not null, primary key
#  user_id         :integer
#  name            :string(255)
#  make            :string(255)
#  model           :string(255)
#  year            :integer
#  starting_milage :integer
#  vin_number      :string(255)
#  image_url       :string(255)
#  created_at      :datetime
#  updated_at      :datetime
#

class Car < ActiveRecord::Base
  belongs_to :user
  has_many :alerts


end
