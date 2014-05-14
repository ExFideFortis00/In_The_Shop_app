class DashboardController < ApplicationController
  def index
    @cars = current_user.cars
    @car = Car.find(params[:car_id])
    @user = current_user
    response = HTTParty.get('https://api.carvoyant.com/v1/api/vehicle/',:headers => { "Authorization" => "Bearer jqrqp8hkmwy4wxpdwjjrq5mn"})
    @connected_vehicles = response["vehicle"]
  end

end