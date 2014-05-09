class CarsController < ApplicationController
  def index
    @cars = current_user.cars
  end

  def new
    @car = Car.new
  end

  def create
  end

  def edit
  end

  def update
  end

  def delete
  end

  private

  def car_params
    params.require(:car).permit(
      :name,
      :make,
      :model,
      :year,
      :starting_milage,
      :image_url
      )
  end

end