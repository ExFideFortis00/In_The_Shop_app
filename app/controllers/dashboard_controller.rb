class DashboardController < ApplicationController
  def index
    @cars = current_user.cars
    @car = Car.find(params[:car_id])
    @user = current_user
  end

end