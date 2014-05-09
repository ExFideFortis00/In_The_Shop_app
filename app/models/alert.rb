# == Schema Information
#
# Table name: alerts
#
#  id               :integer          not null, primary key
#  car_id           :integer
#  diagnostic_codes :string(255)
#  repair_status    :string(255)
#  created_at       :datetime
#  updated_at       :datetime
#

class Alert < ActiveRecord::Base
  belongs_to :car

end
